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
var G__34044__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__34043 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__34043,0,null);var body = cljs.core.nthnext.call(null,vec__34043,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__34044 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__34044__delegate.call(this,args);};
G__34044.cljs$lang$maxFixedArity = 0;
G__34044.cljs$lang$applyTo = (function (arglist__34045){
var args = cljs.core.seq(arglist__34045);
return G__34044__delegate(args);
});
G__34044.cljs$core$IFn$_invoke$arity$variadic = G__34044__delegate;
return G__34044;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__34050(s__34051){return (new cljs.core.LazySeq(null,(function (){var s__34051__$1 = s__34051;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34051__$1);if(temp__4092__auto__)
{var s__34051__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34051__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34051__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34053 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34052 = 0;while(true){
if((i__34052 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__34052);cljs.core.chunk_append.call(null,b__34053,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__34054 = (i__34052 + 1);
i__34052 = G__34054;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34053),iter__34050.call(null,cljs.core.chunk_rest.call(null,s__34051__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34053),null);
}
} else
{var args = cljs.core.first.call(null,s__34051__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__34050.call(null,cljs.core.rest.call(null,s__34051__$2)));
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
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__34059(s__34060){return (new cljs.core.LazySeq(null,(function (){var s__34060__$1 = s__34060;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34060__$1);if(temp__4092__auto__)
{var s__34060__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34060__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34060__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34062 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34061 = 0;while(true){
if((i__34061 < size__4116__auto__))
{var script = cljs.core._nth.call(null,c__4115__auto__,i__34061);cljs.core.chunk_append.call(null,b__34062,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null));
{
var G__34063 = (i__34061 + 1);
i__34061 = G__34063;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34062),iter__34059.call(null,cljs.core.chunk_rest.call(null,s__34060__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34062),null);
}
} else
{var script = cljs.core.first.call(null,s__34060__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null),iter__34059.call(null,cljs.core.rest.call(null,s__34060__$2)));
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
include_js.cljs$lang$applyTo = (function (arglist__34064){
var scripts = cljs.core.seq(arglist__34064);
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
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__34069(s__34070){return (new cljs.core.LazySeq(null,(function (){var s__34070__$1 = s__34070;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34070__$1);if(temp__4092__auto__)
{var s__34070__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34070__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34070__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34072 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34071 = 0;while(true){
if((i__34071 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__34071);cljs.core.chunk_append.call(null,b__34072,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__34073 = (i__34071 + 1);
i__34071 = G__34073;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34072),iter__34069.call(null,cljs.core.chunk_rest.call(null,s__34070__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34072),null);
}
} else
{var style = cljs.core.first.call(null,s__34070__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__34069.call(null,cljs.core.rest.call(null,s__34070__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__34074){
var styles = cljs.core.seq(arglist__34074);
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
sablono.core.link_to34075 = (function() { 
var link_to34075__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to34075 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to34075__delegate.call(this,url,content);};
link_to34075.cljs$lang$maxFixedArity = 1;
link_to34075.cljs$lang$applyTo = (function (arglist__34076){
var url = cljs.core.first(arglist__34076);
var content = cljs.core.rest(arglist__34076);
return link_to34075__delegate(url,content);
});
link_to34075.cljs$core$IFn$_invoke$arity$variadic = link_to34075__delegate;
return link_to34075;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to34075);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to34077 = (function() { 
var mail_to34077__delegate = function (e_mail,p__34078){var vec__34080 = p__34078;var content = cljs.core.nth.call(null,vec__34080,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to34077 = function (e_mail,var_args){
var p__34078 = null;if (arguments.length > 1) {
  p__34078 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to34077__delegate.call(this,e_mail,p__34078);};
mail_to34077.cljs$lang$maxFixedArity = 1;
mail_to34077.cljs$lang$applyTo = (function (arglist__34081){
var e_mail = cljs.core.first(arglist__34081);
var p__34078 = cljs.core.rest(arglist__34081);
return mail_to34077__delegate(e_mail,p__34078);
});
mail_to34077.cljs$core$IFn$_invoke$arity$variadic = mail_to34077__delegate;
return mail_to34077;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to34077);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list34082 = (function unordered_list34082(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__34087(s__34088){return (new cljs.core.LazySeq(null,(function (){var s__34088__$1 = s__34088;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34088__$1);if(temp__4092__auto__)
{var s__34088__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34088__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34088__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34090 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34089 = 0;while(true){
if((i__34089 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__34089);cljs.core.chunk_append.call(null,b__34090,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__34091 = (i__34089 + 1);
i__34089 = G__34091;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34090),iter__34087.call(null,cljs.core.chunk_rest.call(null,s__34088__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34090),null);
}
} else
{var x = cljs.core.first.call(null,s__34088__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__34087.call(null,cljs.core.rest.call(null,s__34088__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list34082);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list34092 = (function ordered_list34092(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__34097(s__34098){return (new cljs.core.LazySeq(null,(function (){var s__34098__$1 = s__34098;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34098__$1);if(temp__4092__auto__)
{var s__34098__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34098__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34098__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34100 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34099 = 0;while(true){
if((i__34099 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__34099);cljs.core.chunk_append.call(null,b__34100,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__34101 = (i__34099 + 1);
i__34099 = G__34101;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34100),iter__34097.call(null,cljs.core.chunk_rest.call(null,s__34098__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34100),null);
}
} else
{var x = cljs.core.first.call(null,s__34098__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__34097.call(null,cljs.core.rest.call(null,s__34098__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list34092);
/**
* Create an image element.
*/
sablono.core.image34102 = (function() {
var image34102 = null;
var image34102__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image34102__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image34102 = function(src,alt){
switch(arguments.length){
case 1:
return image34102__1.call(this,src);
case 2:
return image34102__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image34102.cljs$core$IFn$_invoke$arity$1 = image34102__1;
image34102.cljs$core$IFn$_invoke$arity$2 = image34102__2;
return image34102;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image34102);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__34103_SHARP_,p2__34104_SHARP_){return [cljs.core.str(p1__34103_SHARP_),cljs.core.str("["),cljs.core.str(p2__34104_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__34105_SHARP_,p2__34106_SHARP_){return [cljs.core.str(p1__34105_SHARP_),cljs.core.str("-"),cljs.core.str(p2__34106_SHARP_)].join('');
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
sablono.core.hidden_field34107 = (function() {
var hidden_field34107 = null;
var hidden_field34107__1 = (function (name){return hidden_field34107.call(null,name,null);
});
var hidden_field34107__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field34107 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field34107__1.call(this,name);
case 2:
return hidden_field34107__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field34107.cljs$core$IFn$_invoke$arity$1 = hidden_field34107__1;
hidden_field34107.cljs$core$IFn$_invoke$arity$2 = hidden_field34107__2;
return hidden_field34107;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field34107);
/**
* Creates a new text input field.
*/
sablono.core.text_field34108 = (function() {
var text_field34108 = null;
var text_field34108__1 = (function (name){return text_field34108.call(null,name,null);
});
var text_field34108__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field34108 = function(name,value){
switch(arguments.length){
case 1:
return text_field34108__1.call(this,name);
case 2:
return text_field34108__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field34108.cljs$core$IFn$_invoke$arity$1 = text_field34108__1;
text_field34108.cljs$core$IFn$_invoke$arity$2 = text_field34108__2;
return text_field34108;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field34108);
/**
* Creates a new password field.
*/
sablono.core.password_field34109 = (function() {
var password_field34109 = null;
var password_field34109__1 = (function (name){return password_field34109.call(null,name,null);
});
var password_field34109__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field34109 = function(name,value){
switch(arguments.length){
case 1:
return password_field34109__1.call(this,name);
case 2:
return password_field34109__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field34109.cljs$core$IFn$_invoke$arity$1 = password_field34109__1;
password_field34109.cljs$core$IFn$_invoke$arity$2 = password_field34109__2;
return password_field34109;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field34109);
/**
* Creates a new email input field.
*/
sablono.core.email_field34110 = (function() {
var email_field34110 = null;
var email_field34110__1 = (function (name){return email_field34110.call(null,name,null);
});
var email_field34110__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field34110 = function(name,value){
switch(arguments.length){
case 1:
return email_field34110__1.call(this,name);
case 2:
return email_field34110__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field34110.cljs$core$IFn$_invoke$arity$1 = email_field34110__1;
email_field34110.cljs$core$IFn$_invoke$arity$2 = email_field34110__2;
return email_field34110;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field34110);
/**
* Creates a check box.
*/
sablono.core.check_box34111 = (function() {
var check_box34111 = null;
var check_box34111__1 = (function (name){return check_box34111.call(null,name,null);
});
var check_box34111__2 = (function (name,checked_QMARK_){return check_box34111.call(null,name,checked_QMARK_,"true");
});
var check_box34111__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box34111 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box34111__1.call(this,name);
case 2:
return check_box34111__2.call(this,name,checked_QMARK_);
case 3:
return check_box34111__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box34111.cljs$core$IFn$_invoke$arity$1 = check_box34111__1;
check_box34111.cljs$core$IFn$_invoke$arity$2 = check_box34111__2;
check_box34111.cljs$core$IFn$_invoke$arity$3 = check_box34111__3;
return check_box34111;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box34111);
/**
* Creates a radio button.
*/
sablono.core.radio_button34112 = (function() {
var radio_button34112 = null;
var radio_button34112__1 = (function (group){return radio_button34112.call(null,group,null);
});
var radio_button34112__2 = (function (group,checked_QMARK_){return radio_button34112.call(null,group,checked_QMARK_,"true");
});
var radio_button34112__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button34112 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button34112__1.call(this,group);
case 2:
return radio_button34112__2.call(this,group,checked_QMARK_);
case 3:
return radio_button34112__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button34112.cljs$core$IFn$_invoke$arity$1 = radio_button34112__1;
radio_button34112.cljs$core$IFn$_invoke$arity$2 = radio_button34112__2;
radio_button34112.cljs$core$IFn$_invoke$arity$3 = radio_button34112__3;
return radio_button34112;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button34112);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options34113 = (function() {
var select_options34113 = null;
var select_options34113__1 = (function (coll){return select_options34113.call(null,coll,null);
});
var select_options34113__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__34122(s__34123){return (new cljs.core.LazySeq(null,(function (){var s__34123__$1 = s__34123;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34123__$1);if(temp__4092__auto__)
{var s__34123__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34123__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34123__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34125 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34124 = 0;while(true){
if((i__34124 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__34124);cljs.core.chunk_append.call(null,b__34125,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34128 = x;var text = cljs.core.nth.call(null,vec__34128,0,null);var val = cljs.core.nth.call(null,vec__34128,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options34113.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__34130 = (i__34124 + 1);
i__34124 = G__34130;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34125),iter__34122.call(null,cljs.core.chunk_rest.call(null,s__34123__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34125),null);
}
} else
{var x = cljs.core.first.call(null,s__34123__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34129 = x;var text = cljs.core.nth.call(null,vec__34129,0,null);var val = cljs.core.nth.call(null,vec__34129,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options34113.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__34122.call(null,cljs.core.rest.call(null,s__34123__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options34113 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options34113__1.call(this,coll);
case 2:
return select_options34113__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options34113.cljs$core$IFn$_invoke$arity$1 = select_options34113__1;
select_options34113.cljs$core$IFn$_invoke$arity$2 = select_options34113__2;
return select_options34113;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options34113);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down34131 = (function() {
var drop_down34131 = null;
var drop_down34131__2 = (function (name,options){return drop_down34131.call(null,name,options,null);
});
var drop_down34131__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down34131 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down34131__2.call(this,name,options);
case 3:
return drop_down34131__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down34131.cljs$core$IFn$_invoke$arity$2 = drop_down34131__2;
drop_down34131.cljs$core$IFn$_invoke$arity$3 = drop_down34131__3;
return drop_down34131;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down34131);
/**
* Creates a text area element.
*/
sablono.core.text_area34132 = (function() {
var text_area34132 = null;
var text_area34132__1 = (function (name){return text_area34132.call(null,name,null);
});
var text_area34132__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area34132 = function(name,value){
switch(arguments.length){
case 1:
return text_area34132__1.call(this,name);
case 2:
return text_area34132__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area34132.cljs$core$IFn$_invoke$arity$1 = text_area34132__1;
text_area34132.cljs$core$IFn$_invoke$arity$2 = text_area34132__2;
return text_area34132;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area34132);
/**
* Creates a file upload input.
*/
sablono.core.file_upload34133 = (function file_upload34133(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload34133);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label34134 = (function label34134(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label34134);
/**
* Creates a submit button.
*/
sablono.core.submit_button34135 = (function submit_button34135(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button34135);
/**
* Creates a form reset button.
*/
sablono.core.reset_button34136 = (function reset_button34136(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button34136);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to34137 = (function() { 
var form_to34137__delegate = function (p__34138,body){var vec__34140 = p__34138;var method = cljs.core.nth.call(null,vec__34140,0,null);var action = cljs.core.nth.call(null,vec__34140,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to34137 = function (p__34138,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to34137__delegate.call(this,p__34138,body);};
form_to34137.cljs$lang$maxFixedArity = 1;
form_to34137.cljs$lang$applyTo = (function (arglist__34141){
var p__34138 = cljs.core.first(arglist__34141);
var body = cljs.core.rest(arglist__34141);
return form_to34137__delegate(p__34138,body);
});
form_to34137.cljs$core$IFn$_invoke$arity$variadic = form_to34137__delegate;
return form_to34137;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to34137);
