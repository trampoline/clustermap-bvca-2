// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__15502__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__15501 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__15501,0,null);var body = cljs.core.nthnext.call(null,vec__15501,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__15502 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15502__delegate.call(this,args);};
G__15502.cljs$lang$maxFixedArity = 0;
G__15502.cljs$lang$applyTo = (function (arglist__15503){
var args = cljs.core.seq(arglist__15503);
return G__15502__delegate(args);
});
G__15502.cljs$core$IFn$_invoke$arity$variadic = G__15502__delegate;
return G__15502;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__15508(s__15509){return (new cljs.core.LazySeq(null,(function (){var s__15509__$1 = s__15509;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15509__$1);if(temp__4092__auto__)
{var s__15509__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15509__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15509__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15511 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15510 = 0;while(true){
if((i__15510 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__15510);cljs.core.chunk_append.call(null,b__15511,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__15512 = (i__15510 + 1);
i__15510 = G__15512;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15511),iter__15508.call(null,cljs.core.chunk_rest.call(null,s__15509__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15511),null);
}
} else
{var args = cljs.core.first.call(null,s__15509__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__15508.call(null,cljs.core.rest.call(null,s__15509__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,arglists);
});
/**
* Include a list of external javascript files.
* @param {...*} var_args
*/
sablono.core.include_js = (function() { 
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__15517(s__15518){return (new cljs.core.LazySeq(null,(function (){var s__15518__$1 = s__15518;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15518__$1);if(temp__4092__auto__)
{var s__15518__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15518__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15518__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15520 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15519 = 0;while(true){
if((i__15519 < size__4116__auto__))
{var script = cljs.core._nth.call(null,c__4115__auto__,i__15519);cljs.core.chunk_append.call(null,b__15520,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null));
{
var G__15521 = (i__15519 + 1);
i__15519 = G__15521;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15520),iter__15517.call(null,cljs.core.chunk_rest.call(null,s__15518__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15520),null);
}
} else
{var script = cljs.core.first.call(null,s__15518__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null),iter__15517.call(null,cljs.core.rest.call(null,s__15518__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,scripts);
};
var include_js = function (var_args){
var scripts = null;if (arguments.length > 0) {
  scripts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_js__delegate.call(this,scripts);};
include_js.cljs$lang$maxFixedArity = 0;
include_js.cljs$lang$applyTo = (function (arglist__15522){
var scripts = cljs.core.seq(arglist__15522);
return include_js__delegate(scripts);
});
include_js.cljs$core$IFn$_invoke$arity$variadic = include_js__delegate;
return include_js;
})()
;
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__15527(s__15528){return (new cljs.core.LazySeq(null,(function (){var s__15528__$1 = s__15528;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15528__$1);if(temp__4092__auto__)
{var s__15528__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15528__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15528__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15530 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15529 = 0;while(true){
if((i__15529 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__15529);cljs.core.chunk_append.call(null,b__15530,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__15531 = (i__15529 + 1);
i__15529 = G__15531;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15530),iter__15527.call(null,cljs.core.chunk_rest.call(null,s__15528__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15530),null);
}
} else
{var style = cljs.core.first.call(null,s__15528__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__15527.call(null,cljs.core.rest.call(null,s__15528__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__15532){
var styles = cljs.core.seq(arglist__15532);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wrap the supplied javascript up in script tags and a CDATA section.
*/
sablono.core.javascript_tag = (function javascript_tag(script){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript"], null),[cljs.core.str("//<![CDATA[\n"),cljs.core.str(script),cljs.core.str("\n//]]>")].join('')], null);
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to15533 = (function() { 
var link_to15533__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to15533 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to15533__delegate.call(this,url,content);};
link_to15533.cljs$lang$maxFixedArity = 1;
link_to15533.cljs$lang$applyTo = (function (arglist__15534){
var url = cljs.core.first(arglist__15534);
var content = cljs.core.rest(arglist__15534);
return link_to15533__delegate(url,content);
});
link_to15533.cljs$core$IFn$_invoke$arity$variadic = link_to15533__delegate;
return link_to15533;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15533);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to15535 = (function() { 
var mail_to15535__delegate = function (e_mail,p__15536){var vec__15538 = p__15536;var content = cljs.core.nth.call(null,vec__15538,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to15535 = function (e_mail,var_args){
var p__15536 = null;if (arguments.length > 1) {
  p__15536 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to15535__delegate.call(this,e_mail,p__15536);};
mail_to15535.cljs$lang$maxFixedArity = 1;
mail_to15535.cljs$lang$applyTo = (function (arglist__15539){
var e_mail = cljs.core.first(arglist__15539);
var p__15536 = cljs.core.rest(arglist__15539);
return mail_to15535__delegate(e_mail,p__15536);
});
mail_to15535.cljs$core$IFn$_invoke$arity$variadic = mail_to15535__delegate;
return mail_to15535;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15535);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list15540 = (function unordered_list15540(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__15545(s__15546){return (new cljs.core.LazySeq(null,(function (){var s__15546__$1 = s__15546;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15546__$1);if(temp__4092__auto__)
{var s__15546__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15546__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15546__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15548 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15547 = 0;while(true){
if((i__15547 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15547);cljs.core.chunk_append.call(null,b__15548,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15549 = (i__15547 + 1);
i__15547 = G__15549;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15548),iter__15545.call(null,cljs.core.chunk_rest.call(null,s__15546__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15548),null);
}
} else
{var x = cljs.core.first.call(null,s__15546__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15545.call(null,cljs.core.rest.call(null,s__15546__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15540);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list15550 = (function ordered_list15550(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__15555(s__15556){return (new cljs.core.LazySeq(null,(function (){var s__15556__$1 = s__15556;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15556__$1);if(temp__4092__auto__)
{var s__15556__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15556__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15556__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15558 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15557 = 0;while(true){
if((i__15557 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15557);cljs.core.chunk_append.call(null,b__15558,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15559 = (i__15557 + 1);
i__15557 = G__15559;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15558),iter__15555.call(null,cljs.core.chunk_rest.call(null,s__15556__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15558),null);
}
} else
{var x = cljs.core.first.call(null,s__15556__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15555.call(null,cljs.core.rest.call(null,s__15556__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15550);
/**
* Create an image element.
*/
sablono.core.image15560 = (function() {
var image15560 = null;
var image15560__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image15560__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image15560 = function(src,alt){
switch(arguments.length){
case 1:
return image15560__1.call(this,src);
case 2:
return image15560__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image15560.cljs$core$IFn$_invoke$arity$1 = image15560__1;
image15560.cljs$core$IFn$_invoke$arity$2 = image15560__2;
return image15560;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15560);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__15561_SHARP_,p2__15562_SHARP_){return [cljs.core.str(p1__15561_SHARP_),cljs.core.str("["),cljs.core.str(p2__15562_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__15563_SHARP_,p2__15564_SHARP_){return [cljs.core.str(p1__15563_SHARP_),cljs.core.str("-"),cljs.core.str(p2__15564_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field15565 = (function() {
var hidden_field15565 = null;
var hidden_field15565__1 = (function (name){return hidden_field15565.call(null,name,null);
});
var hidden_field15565__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field15565 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field15565__1.call(this,name);
case 2:
return hidden_field15565__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field15565.cljs$core$IFn$_invoke$arity$1 = hidden_field15565__1;
hidden_field15565.cljs$core$IFn$_invoke$arity$2 = hidden_field15565__2;
return hidden_field15565;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15565);
/**
* Creates a new text input field.
*/
sablono.core.text_field15566 = (function() {
var text_field15566 = null;
var text_field15566__1 = (function (name){return text_field15566.call(null,name,null);
});
var text_field15566__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field15566 = function(name,value){
switch(arguments.length){
case 1:
return text_field15566__1.call(this,name);
case 2:
return text_field15566__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field15566.cljs$core$IFn$_invoke$arity$1 = text_field15566__1;
text_field15566.cljs$core$IFn$_invoke$arity$2 = text_field15566__2;
return text_field15566;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15566);
/**
* Creates a new password field.
*/
sablono.core.password_field15567 = (function() {
var password_field15567 = null;
var password_field15567__1 = (function (name){return password_field15567.call(null,name,null);
});
var password_field15567__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field15567 = function(name,value){
switch(arguments.length){
case 1:
return password_field15567__1.call(this,name);
case 2:
return password_field15567__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field15567.cljs$core$IFn$_invoke$arity$1 = password_field15567__1;
password_field15567.cljs$core$IFn$_invoke$arity$2 = password_field15567__2;
return password_field15567;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15567);
/**
* Creates a new email input field.
*/
sablono.core.email_field15568 = (function() {
var email_field15568 = null;
var email_field15568__1 = (function (name){return email_field15568.call(null,name,null);
});
var email_field15568__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field15568 = function(name,value){
switch(arguments.length){
case 1:
return email_field15568__1.call(this,name);
case 2:
return email_field15568__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field15568.cljs$core$IFn$_invoke$arity$1 = email_field15568__1;
email_field15568.cljs$core$IFn$_invoke$arity$2 = email_field15568__2;
return email_field15568;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15568);
/**
* Creates a check box.
*/
sablono.core.check_box15569 = (function() {
var check_box15569 = null;
var check_box15569__1 = (function (name){return check_box15569.call(null,name,null);
});
var check_box15569__2 = (function (name,checked_QMARK_){return check_box15569.call(null,name,checked_QMARK_,"true");
});
var check_box15569__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box15569 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box15569__1.call(this,name);
case 2:
return check_box15569__2.call(this,name,checked_QMARK_);
case 3:
return check_box15569__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box15569.cljs$core$IFn$_invoke$arity$1 = check_box15569__1;
check_box15569.cljs$core$IFn$_invoke$arity$2 = check_box15569__2;
check_box15569.cljs$core$IFn$_invoke$arity$3 = check_box15569__3;
return check_box15569;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15569);
/**
* Creates a radio button.
*/
sablono.core.radio_button15570 = (function() {
var radio_button15570 = null;
var radio_button15570__1 = (function (group){return radio_button15570.call(null,group,null);
});
var radio_button15570__2 = (function (group,checked_QMARK_){return radio_button15570.call(null,group,checked_QMARK_,"true");
});
var radio_button15570__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button15570 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button15570__1.call(this,group);
case 2:
return radio_button15570__2.call(this,group,checked_QMARK_);
case 3:
return radio_button15570__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button15570.cljs$core$IFn$_invoke$arity$1 = radio_button15570__1;
radio_button15570.cljs$core$IFn$_invoke$arity$2 = radio_button15570__2;
radio_button15570.cljs$core$IFn$_invoke$arity$3 = radio_button15570__3;
return radio_button15570;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15570);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options15571 = (function() {
var select_options15571 = null;
var select_options15571__1 = (function (coll){return select_options15571.call(null,coll,null);
});
var select_options15571__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__15580(s__15581){return (new cljs.core.LazySeq(null,(function (){var s__15581__$1 = s__15581;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15581__$1);if(temp__4092__auto__)
{var s__15581__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15581__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15581__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15583 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15582 = 0;while(true){
if((i__15582 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15582);cljs.core.chunk_append.call(null,b__15583,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15586 = x;var text = cljs.core.nth.call(null,vec__15586,0,null);var val = cljs.core.nth.call(null,vec__15586,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15571.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__15588 = (i__15582 + 1);
i__15582 = G__15588;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15583),iter__15580.call(null,cljs.core.chunk_rest.call(null,s__15581__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15583),null);
}
} else
{var x = cljs.core.first.call(null,s__15581__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15587 = x;var text = cljs.core.nth.call(null,vec__15587,0,null);var val = cljs.core.nth.call(null,vec__15587,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15571.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__15580.call(null,cljs.core.rest.call(null,s__15581__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options15571 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options15571__1.call(this,coll);
case 2:
return select_options15571__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options15571.cljs$core$IFn$_invoke$arity$1 = select_options15571__1;
select_options15571.cljs$core$IFn$_invoke$arity$2 = select_options15571__2;
return select_options15571;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15571);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down15589 = (function() {
var drop_down15589 = null;
var drop_down15589__2 = (function (name,options){return drop_down15589.call(null,name,options,null);
});
var drop_down15589__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down15589 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down15589__2.call(this,name,options);
case 3:
return drop_down15589__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down15589.cljs$core$IFn$_invoke$arity$2 = drop_down15589__2;
drop_down15589.cljs$core$IFn$_invoke$arity$3 = drop_down15589__3;
return drop_down15589;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15589);
/**
* Creates a text area element.
*/
sablono.core.text_area15590 = (function() {
var text_area15590 = null;
var text_area15590__1 = (function (name){return text_area15590.call(null,name,null);
});
var text_area15590__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area15590 = function(name,value){
switch(arguments.length){
case 1:
return text_area15590__1.call(this,name);
case 2:
return text_area15590__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area15590.cljs$core$IFn$_invoke$arity$1 = text_area15590__1;
text_area15590.cljs$core$IFn$_invoke$arity$2 = text_area15590__2;
return text_area15590;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15590);
/**
* Creates a file upload input.
*/
sablono.core.file_upload15591 = (function file_upload15591(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload15591);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label15592 = (function label15592(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15592);
/**
* Creates a submit button.
*/
sablono.core.submit_button15593 = (function submit_button15593(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15593);
/**
* Creates a form reset button.
*/
sablono.core.reset_button15594 = (function reset_button15594(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15594);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to15595 = (function() { 
var form_to15595__delegate = function (p__15596,body){var vec__15598 = p__15596;var method = cljs.core.nth.call(null,vec__15598,0,null);var action = cljs.core.nth.call(null,vec__15598,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to15595 = function (p__15596,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to15595__delegate.call(this,p__15596,body);};
form_to15595.cljs$lang$maxFixedArity = 1;
form_to15595.cljs$lang$applyTo = (function (arglist__15599){
var p__15596 = cljs.core.first(arglist__15599);
var body = cljs.core.rest(arglist__15599);
return form_to15595__delegate(p__15596,body);
});
form_to15595.cljs$core$IFn$_invoke$arity$variadic = form_to15595__delegate;
return form_to15595;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15595);

//# sourceMappingURL=core.js.map