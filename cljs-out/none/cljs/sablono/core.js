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
var G__15551__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__15550 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__15550,0,null);var body = cljs.core.nthnext.call(null,vec__15550,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__15551 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15551__delegate.call(this,args);};
G__15551.cljs$lang$maxFixedArity = 0;
G__15551.cljs$lang$applyTo = (function (arglist__15552){
var args = cljs.core.seq(arglist__15552);
return G__15551__delegate(args);
});
G__15551.cljs$core$IFn$_invoke$arity$variadic = G__15551__delegate;
return G__15551;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__15557(s__15558){return (new cljs.core.LazySeq(null,(function (){var s__15558__$1 = s__15558;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15558__$1);if(temp__4092__auto__)
{var s__15558__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15558__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15558__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15560 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15559 = 0;while(true){
if((i__15559 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__15559);cljs.core.chunk_append.call(null,b__15560,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__15561 = (i__15559 + 1);
i__15559 = G__15561;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15560),iter__15557.call(null,cljs.core.chunk_rest.call(null,s__15558__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15560),null);
}
} else
{var args = cljs.core.first.call(null,s__15558__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__15557.call(null,cljs.core.rest.call(null,s__15558__$2)));
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
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__15566(s__15567){return (new cljs.core.LazySeq(null,(function (){var s__15567__$1 = s__15567;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15567__$1);if(temp__4092__auto__)
{var s__15567__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15567__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15567__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15569 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15568 = 0;while(true){
if((i__15568 < size__4116__auto__))
{var script = cljs.core._nth.call(null,c__4115__auto__,i__15568);cljs.core.chunk_append.call(null,b__15569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null));
{
var G__15570 = (i__15568 + 1);
i__15568 = G__15570;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15569),iter__15566.call(null,cljs.core.chunk_rest.call(null,s__15567__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15569),null);
}
} else
{var script = cljs.core.first.call(null,s__15567__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null),iter__15566.call(null,cljs.core.rest.call(null,s__15567__$2)));
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
include_js.cljs$lang$applyTo = (function (arglist__15571){
var scripts = cljs.core.seq(arglist__15571);
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
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__15576(s__15577){return (new cljs.core.LazySeq(null,(function (){var s__15577__$1 = s__15577;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15577__$1);if(temp__4092__auto__)
{var s__15577__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15577__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15577__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15579 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15578 = 0;while(true){
if((i__15578 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__15578);cljs.core.chunk_append.call(null,b__15579,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__15580 = (i__15578 + 1);
i__15578 = G__15580;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15579),iter__15576.call(null,cljs.core.chunk_rest.call(null,s__15577__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15579),null);
}
} else
{var style = cljs.core.first.call(null,s__15577__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__15576.call(null,cljs.core.rest.call(null,s__15577__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__15581){
var styles = cljs.core.seq(arglist__15581);
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
sablono.core.link_to15582 = (function() { 
var link_to15582__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to15582 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to15582__delegate.call(this,url,content);};
link_to15582.cljs$lang$maxFixedArity = 1;
link_to15582.cljs$lang$applyTo = (function (arglist__15583){
var url = cljs.core.first(arglist__15583);
var content = cljs.core.rest(arglist__15583);
return link_to15582__delegate(url,content);
});
link_to15582.cljs$core$IFn$_invoke$arity$variadic = link_to15582__delegate;
return link_to15582;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15582);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to15584 = (function() { 
var mail_to15584__delegate = function (e_mail,p__15585){var vec__15587 = p__15585;var content = cljs.core.nth.call(null,vec__15587,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to15584 = function (e_mail,var_args){
var p__15585 = null;if (arguments.length > 1) {
  p__15585 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to15584__delegate.call(this,e_mail,p__15585);};
mail_to15584.cljs$lang$maxFixedArity = 1;
mail_to15584.cljs$lang$applyTo = (function (arglist__15588){
var e_mail = cljs.core.first(arglist__15588);
var p__15585 = cljs.core.rest(arglist__15588);
return mail_to15584__delegate(e_mail,p__15585);
});
mail_to15584.cljs$core$IFn$_invoke$arity$variadic = mail_to15584__delegate;
return mail_to15584;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15584);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list15589 = (function unordered_list15589(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__15594(s__15595){return (new cljs.core.LazySeq(null,(function (){var s__15595__$1 = s__15595;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15595__$1);if(temp__4092__auto__)
{var s__15595__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15595__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15595__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15597 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15596 = 0;while(true){
if((i__15596 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15596);cljs.core.chunk_append.call(null,b__15597,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15598 = (i__15596 + 1);
i__15596 = G__15598;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15597),iter__15594.call(null,cljs.core.chunk_rest.call(null,s__15595__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15597),null);
}
} else
{var x = cljs.core.first.call(null,s__15595__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15594.call(null,cljs.core.rest.call(null,s__15595__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15589);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list15599 = (function ordered_list15599(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__15604(s__15605){return (new cljs.core.LazySeq(null,(function (){var s__15605__$1 = s__15605;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15605__$1);if(temp__4092__auto__)
{var s__15605__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15605__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15605__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15607 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15606 = 0;while(true){
if((i__15606 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15606);cljs.core.chunk_append.call(null,b__15607,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15608 = (i__15606 + 1);
i__15606 = G__15608;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15607),iter__15604.call(null,cljs.core.chunk_rest.call(null,s__15605__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15607),null);
}
} else
{var x = cljs.core.first.call(null,s__15605__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15604.call(null,cljs.core.rest.call(null,s__15605__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15599);
/**
* Create an image element.
*/
sablono.core.image15609 = (function() {
var image15609 = null;
var image15609__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image15609__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image15609 = function(src,alt){
switch(arguments.length){
case 1:
return image15609__1.call(this,src);
case 2:
return image15609__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image15609.cljs$core$IFn$_invoke$arity$1 = image15609__1;
image15609.cljs$core$IFn$_invoke$arity$2 = image15609__2;
return image15609;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15609);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__15610_SHARP_,p2__15611_SHARP_){return [cljs.core.str(p1__15610_SHARP_),cljs.core.str("["),cljs.core.str(p2__15611_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__15612_SHARP_,p2__15613_SHARP_){return [cljs.core.str(p1__15612_SHARP_),cljs.core.str("-"),cljs.core.str(p2__15613_SHARP_)].join('');
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
sablono.core.hidden_field15614 = (function() {
var hidden_field15614 = null;
var hidden_field15614__1 = (function (name){return hidden_field15614.call(null,name,null);
});
var hidden_field15614__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field15614 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field15614__1.call(this,name);
case 2:
return hidden_field15614__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field15614.cljs$core$IFn$_invoke$arity$1 = hidden_field15614__1;
hidden_field15614.cljs$core$IFn$_invoke$arity$2 = hidden_field15614__2;
return hidden_field15614;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15614);
/**
* Creates a new text input field.
*/
sablono.core.text_field15615 = (function() {
var text_field15615 = null;
var text_field15615__1 = (function (name){return text_field15615.call(null,name,null);
});
var text_field15615__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field15615 = function(name,value){
switch(arguments.length){
case 1:
return text_field15615__1.call(this,name);
case 2:
return text_field15615__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field15615.cljs$core$IFn$_invoke$arity$1 = text_field15615__1;
text_field15615.cljs$core$IFn$_invoke$arity$2 = text_field15615__2;
return text_field15615;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15615);
/**
* Creates a new password field.
*/
sablono.core.password_field15616 = (function() {
var password_field15616 = null;
var password_field15616__1 = (function (name){return password_field15616.call(null,name,null);
});
var password_field15616__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field15616 = function(name,value){
switch(arguments.length){
case 1:
return password_field15616__1.call(this,name);
case 2:
return password_field15616__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field15616.cljs$core$IFn$_invoke$arity$1 = password_field15616__1;
password_field15616.cljs$core$IFn$_invoke$arity$2 = password_field15616__2;
return password_field15616;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15616);
/**
* Creates a new email input field.
*/
sablono.core.email_field15617 = (function() {
var email_field15617 = null;
var email_field15617__1 = (function (name){return email_field15617.call(null,name,null);
});
var email_field15617__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field15617 = function(name,value){
switch(arguments.length){
case 1:
return email_field15617__1.call(this,name);
case 2:
return email_field15617__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field15617.cljs$core$IFn$_invoke$arity$1 = email_field15617__1;
email_field15617.cljs$core$IFn$_invoke$arity$2 = email_field15617__2;
return email_field15617;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15617);
/**
* Creates a check box.
*/
sablono.core.check_box15618 = (function() {
var check_box15618 = null;
var check_box15618__1 = (function (name){return check_box15618.call(null,name,null);
});
var check_box15618__2 = (function (name,checked_QMARK_){return check_box15618.call(null,name,checked_QMARK_,"true");
});
var check_box15618__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box15618 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box15618__1.call(this,name);
case 2:
return check_box15618__2.call(this,name,checked_QMARK_);
case 3:
return check_box15618__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box15618.cljs$core$IFn$_invoke$arity$1 = check_box15618__1;
check_box15618.cljs$core$IFn$_invoke$arity$2 = check_box15618__2;
check_box15618.cljs$core$IFn$_invoke$arity$3 = check_box15618__3;
return check_box15618;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15618);
/**
* Creates a radio button.
*/
sablono.core.radio_button15619 = (function() {
var radio_button15619 = null;
var radio_button15619__1 = (function (group){return radio_button15619.call(null,group,null);
});
var radio_button15619__2 = (function (group,checked_QMARK_){return radio_button15619.call(null,group,checked_QMARK_,"true");
});
var radio_button15619__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button15619 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button15619__1.call(this,group);
case 2:
return radio_button15619__2.call(this,group,checked_QMARK_);
case 3:
return radio_button15619__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button15619.cljs$core$IFn$_invoke$arity$1 = radio_button15619__1;
radio_button15619.cljs$core$IFn$_invoke$arity$2 = radio_button15619__2;
radio_button15619.cljs$core$IFn$_invoke$arity$3 = radio_button15619__3;
return radio_button15619;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15619);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options15620 = (function() {
var select_options15620 = null;
var select_options15620__1 = (function (coll){return select_options15620.call(null,coll,null);
});
var select_options15620__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__15629(s__15630){return (new cljs.core.LazySeq(null,(function (){var s__15630__$1 = s__15630;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15630__$1);if(temp__4092__auto__)
{var s__15630__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15630__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15630__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15632 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15631 = 0;while(true){
if((i__15631 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15631);cljs.core.chunk_append.call(null,b__15632,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15635 = x;var text = cljs.core.nth.call(null,vec__15635,0,null);var val = cljs.core.nth.call(null,vec__15635,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15620.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__15637 = (i__15631 + 1);
i__15631 = G__15637;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15632),iter__15629.call(null,cljs.core.chunk_rest.call(null,s__15630__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15632),null);
}
} else
{var x = cljs.core.first.call(null,s__15630__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15636 = x;var text = cljs.core.nth.call(null,vec__15636,0,null);var val = cljs.core.nth.call(null,vec__15636,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15620.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__15629.call(null,cljs.core.rest.call(null,s__15630__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options15620 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options15620__1.call(this,coll);
case 2:
return select_options15620__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options15620.cljs$core$IFn$_invoke$arity$1 = select_options15620__1;
select_options15620.cljs$core$IFn$_invoke$arity$2 = select_options15620__2;
return select_options15620;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15620);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down15638 = (function() {
var drop_down15638 = null;
var drop_down15638__2 = (function (name,options){return drop_down15638.call(null,name,options,null);
});
var drop_down15638__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down15638 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down15638__2.call(this,name,options);
case 3:
return drop_down15638__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down15638.cljs$core$IFn$_invoke$arity$2 = drop_down15638__2;
drop_down15638.cljs$core$IFn$_invoke$arity$3 = drop_down15638__3;
return drop_down15638;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15638);
/**
* Creates a text area element.
*/
sablono.core.text_area15639 = (function() {
var text_area15639 = null;
var text_area15639__1 = (function (name){return text_area15639.call(null,name,null);
});
var text_area15639__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area15639 = function(name,value){
switch(arguments.length){
case 1:
return text_area15639__1.call(this,name);
case 2:
return text_area15639__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area15639.cljs$core$IFn$_invoke$arity$1 = text_area15639__1;
text_area15639.cljs$core$IFn$_invoke$arity$2 = text_area15639__2;
return text_area15639;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15639);
/**
* Creates a file upload input.
*/
sablono.core.file_upload15640 = (function file_upload15640(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload15640);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label15641 = (function label15641(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15641);
/**
* Creates a submit button.
*/
sablono.core.submit_button15642 = (function submit_button15642(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15642);
/**
* Creates a form reset button.
*/
sablono.core.reset_button15643 = (function reset_button15643(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15643);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to15644 = (function() { 
var form_to15644__delegate = function (p__15645,body){var vec__15647 = p__15645;var method = cljs.core.nth.call(null,vec__15647,0,null);var action = cljs.core.nth.call(null,vec__15647,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to15644 = function (p__15645,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to15644__delegate.call(this,p__15645,body);};
form_to15644.cljs$lang$maxFixedArity = 1;
form_to15644.cljs$lang$applyTo = (function (arglist__15648){
var p__15645 = cljs.core.first(arglist__15648);
var body = cljs.core.rest(arglist__15648);
return form_to15644__delegate(p__15645,body);
});
form_to15644.cljs$core$IFn$_invoke$arity$variadic = form_to15644__delegate;
return form_to15644;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15644);

//# sourceMappingURL=core.js.map