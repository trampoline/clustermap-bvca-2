// Compiled by ClojureScript 0.0-2227
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__50741__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__50740 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__50740,0,null);var body = cljs.core.nthnext.call(null,vec__50740,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__50741 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__50741__delegate.call(this,args);};
G__50741.cljs$lang$maxFixedArity = 0;
G__50741.cljs$lang$applyTo = (function (arglist__50742){
var args = cljs.core.seq(arglist__50742);
return G__50741__delegate(args);
});
G__50741.cljs$core$IFn$_invoke$arity$variadic = G__50741__delegate;
return G__50741;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4264__auto__ = (function iter__50747(s__50748){return (new cljs.core.LazySeq(null,(function (){var s__50748__$1 = s__50748;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__50748__$1);if(temp__4126__auto__)
{var s__50748__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50748__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__50748__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__50750 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__50749 = 0;while(true){
if((i__50749 < size__4263__auto__))
{var args = cljs.core._nth.call(null,c__4262__auto__,i__50749);cljs.core.chunk_append.call(null,b__50750,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__50751 = (i__50749 + 1);
i__50749 = G__50751;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50750),iter__50747.call(null,cljs.core.chunk_rest.call(null,s__50748__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50750),null);
}
} else
{var args = cljs.core.first.call(null,s__50748__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__50747.call(null,cljs.core.rest.call(null,s__50748__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4264__auto__ = (function iter__50756(s__50757){return (new cljs.core.LazySeq(null,(function (){var s__50757__$1 = s__50757;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__50757__$1);if(temp__4126__auto__)
{var s__50757__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50757__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__50757__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__50759 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__50758 = 0;while(true){
if((i__50758 < size__4263__auto__))
{var style = cljs.core._nth.call(null,c__4262__auto__,i__50758);cljs.core.chunk_append.call(null,b__50759,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__50760 = (i__50758 + 1);
i__50758 = G__50760;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50759),iter__50756.call(null,cljs.core.chunk_rest.call(null,s__50757__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50759),null);
}
} else
{var style = cljs.core.first.call(null,s__50757__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__50756.call(null,cljs.core.rest.call(null,s__50757__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__50761){
var styles = cljs.core.seq(arglist__50761);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to50762 = (function() { 
var link_to50762__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to50762 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to50762__delegate.call(this,url,content);};
link_to50762.cljs$lang$maxFixedArity = 1;
link_to50762.cljs$lang$applyTo = (function (arglist__50763){
var url = cljs.core.first(arglist__50763);
var content = cljs.core.rest(arglist__50763);
return link_to50762__delegate(url,content);
});
link_to50762.cljs$core$IFn$_invoke$arity$variadic = link_to50762__delegate;
return link_to50762;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to50762);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to50764 = (function() { 
var mail_to50764__delegate = function (e_mail,p__50765){var vec__50767 = p__50765;var content = cljs.core.nth.call(null,vec__50767,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3539__auto__ = content;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to50764 = function (e_mail,var_args){
var p__50765 = null;if (arguments.length > 1) {
  p__50765 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to50764__delegate.call(this,e_mail,p__50765);};
mail_to50764.cljs$lang$maxFixedArity = 1;
mail_to50764.cljs$lang$applyTo = (function (arglist__50768){
var e_mail = cljs.core.first(arglist__50768);
var p__50765 = cljs.core.rest(arglist__50768);
return mail_to50764__delegate(e_mail,p__50765);
});
mail_to50764.cljs$core$IFn$_invoke$arity$variadic = mail_to50764__delegate;
return mail_to50764;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to50764);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list50769 = (function unordered_list50769(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4264__auto__ = (function iter__50774(s__50775){return (new cljs.core.LazySeq(null,(function (){var s__50775__$1 = s__50775;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__50775__$1);if(temp__4126__auto__)
{var s__50775__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50775__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__50775__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__50777 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__50776 = 0;while(true){
if((i__50776 < size__4263__auto__))
{var x = cljs.core._nth.call(null,c__4262__auto__,i__50776);cljs.core.chunk_append.call(null,b__50777,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__50778 = (i__50776 + 1);
i__50776 = G__50778;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50777),iter__50774.call(null,cljs.core.chunk_rest.call(null,s__50775__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50777),null);
}
} else
{var x = cljs.core.first.call(null,s__50775__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__50774.call(null,cljs.core.rest.call(null,s__50775__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list50769);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list50779 = (function ordered_list50779(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4264__auto__ = (function iter__50784(s__50785){return (new cljs.core.LazySeq(null,(function (){var s__50785__$1 = s__50785;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__50785__$1);if(temp__4126__auto__)
{var s__50785__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50785__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__50785__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__50787 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__50786 = 0;while(true){
if((i__50786 < size__4263__auto__))
{var x = cljs.core._nth.call(null,c__4262__auto__,i__50786);cljs.core.chunk_append.call(null,b__50787,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__50788 = (i__50786 + 1);
i__50786 = G__50788;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50787),iter__50784.call(null,cljs.core.chunk_rest.call(null,s__50785__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50787),null);
}
} else
{var x = cljs.core.first.call(null,s__50785__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__50784.call(null,cljs.core.rest.call(null,s__50785__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list50779);
/**
* Create an image element.
*/
sablono.core.image50789 = (function() {
var image50789 = null;
var image50789__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image50789__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image50789 = function(src,alt){
switch(arguments.length){
case 1:
return image50789__1.call(this,src);
case 2:
return image50789__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image50789.cljs$core$IFn$_invoke$arity$1 = image50789__1;
image50789.cljs$core$IFn$_invoke$arity$2 = image50789__2;
return image50789;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image50789);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__50790_SHARP_,p2__50791_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50790_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__50791_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__50792_SHARP_,p2__50793_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50792_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__50793_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field50794 = (function() {
var color_field50794 = null;
var color_field50794__1 = (function (name__10089__auto__){return color_field50794.call(null,name__10089__auto__,null);
});
var color_field50794__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1545688804,null))),name__10089__auto__,value__10090__auto__);
});
color_field50794 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return color_field50794__1.call(this,name__10089__auto__);
case 2:
return color_field50794__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field50794.cljs$core$IFn$_invoke$arity$1 = color_field50794__1;
color_field50794.cljs$core$IFn$_invoke$arity$2 = color_field50794__2;
return color_field50794;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field50794);
/**
* Creates a date input field.
*/
sablono.core.date_field50795 = (function() {
var date_field50795 = null;
var date_field50795__1 = (function (name__10089__auto__){return date_field50795.call(null,name__10089__auto__,null);
});
var date_field50795__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",-1637455513,null))),name__10089__auto__,value__10090__auto__);
});
date_field50795 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return date_field50795__1.call(this,name__10089__auto__);
case 2:
return date_field50795__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field50795.cljs$core$IFn$_invoke$arity$1 = date_field50795__1;
date_field50795.cljs$core$IFn$_invoke$arity$2 = date_field50795__2;
return date_field50795;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field50795);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field50796 = (function() {
var datetime_field50796 = null;
var datetime_field50796__1 = (function (name__10089__auto__){return datetime_field50796.call(null,name__10089__auto__,null);
});
var datetime_field50796__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))),name__10089__auto__,value__10090__auto__);
});
datetime_field50796 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return datetime_field50796__1.call(this,name__10089__auto__);
case 2:
return datetime_field50796__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field50796.cljs$core$IFn$_invoke$arity$1 = datetime_field50796__1;
datetime_field50796.cljs$core$IFn$_invoke$arity$2 = datetime_field50796__2;
return datetime_field50796;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field50796);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field50797 = (function() {
var datetime_local_field50797 = null;
var datetime_local_field50797__1 = (function (name__10089__auto__){return datetime_local_field50797.call(null,name__10089__auto__,null);
});
var datetime_local_field50797__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))),name__10089__auto__,value__10090__auto__);
});
datetime_local_field50797 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return datetime_local_field50797__1.call(this,name__10089__auto__);
case 2:
return datetime_local_field50797__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field50797.cljs$core$IFn$_invoke$arity$1 = datetime_local_field50797__1;
datetime_local_field50797.cljs$core$IFn$_invoke$arity$2 = datetime_local_field50797__2;
return datetime_local_field50797;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field50797);
/**
* Creates a email input field.
*/
sablono.core.email_field50798 = (function() {
var email_field50798 = null;
var email_field50798__1 = (function (name__10089__auto__){return email_field50798.call(null,name__10089__auto__,null);
});
var email_field50798__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1543912107,null))),name__10089__auto__,value__10090__auto__);
});
email_field50798 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return email_field50798__1.call(this,name__10089__auto__);
case 2:
return email_field50798__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field50798.cljs$core$IFn$_invoke$arity$1 = email_field50798__1;
email_field50798.cljs$core$IFn$_invoke$arity$2 = email_field50798__2;
return email_field50798;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field50798);
/**
* Creates a file input field.
*/
sablono.core.file_field50799 = (function() {
var file_field50799 = null;
var file_field50799__1 = (function (name__10089__auto__){return file_field50799.call(null,name__10089__auto__,null);
});
var file_field50799__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",-1637388491,null))),name__10089__auto__,value__10090__auto__);
});
file_field50799 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return file_field50799__1.call(this,name__10089__auto__);
case 2:
return file_field50799__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field50799.cljs$core$IFn$_invoke$arity$1 = file_field50799__1;
file_field50799.cljs$core$IFn$_invoke$arity$2 = file_field50799__2;
return file_field50799;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field50799);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field50800 = (function() {
var hidden_field50800 = null;
var hidden_field50800__1 = (function (name__10089__auto__){return hidden_field50800.call(null,name__10089__auto__,null);
});
var hidden_field50800__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))),name__10089__auto__,value__10090__auto__);
});
hidden_field50800 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return hidden_field50800__1.call(this,name__10089__auto__);
case 2:
return hidden_field50800__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field50800.cljs$core$IFn$_invoke$arity$1 = hidden_field50800__1;
hidden_field50800.cljs$core$IFn$_invoke$arity$2 = hidden_field50800__2;
return hidden_field50800;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field50800);
/**
* Creates a month input field.
*/
sablono.core.month_field50801 = (function() {
var month_field50801 = null;
var month_field50801__1 = (function (name__10089__auto__){return month_field50801.call(null,name__10089__auto__,null);
});
var month_field50801__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-1536451527,null))),name__10089__auto__,value__10090__auto__);
});
month_field50801 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return month_field50801__1.call(this,name__10089__auto__);
case 2:
return month_field50801__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field50801.cljs$core$IFn$_invoke$arity$1 = month_field50801__1;
month_field50801.cljs$core$IFn$_invoke$arity$2 = month_field50801__2;
return month_field50801;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field50801);
/**
* Creates a number input field.
*/
sablono.core.number_field50802 = (function() {
var number_field50802 = null;
var number_field50802__1 = (function (name__10089__auto__){return number_field50802.call(null,name__10089__auto__,null);
});
var number_field50802__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",1620071682,null))),name__10089__auto__,value__10090__auto__);
});
number_field50802 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return number_field50802__1.call(this,name__10089__auto__);
case 2:
return number_field50802__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field50802.cljs$core$IFn$_invoke$arity$1 = number_field50802__1;
number_field50802.cljs$core$IFn$_invoke$arity$2 = number_field50802__2;
return number_field50802;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field50802);
/**
* Creates a password input field.
*/
sablono.core.password_field50803 = (function() {
var password_field50803 = null;
var password_field50803__1 = (function (name__10089__auto__){return password_field50803.call(null,name__10089__auto__,null);
});
var password_field50803__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",-423545772,null))),name__10089__auto__,value__10090__auto__);
});
password_field50803 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return password_field50803__1.call(this,name__10089__auto__);
case 2:
return password_field50803__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field50803.cljs$core$IFn$_invoke$arity$1 = password_field50803__1;
password_field50803.cljs$core$IFn$_invoke$arity$2 = password_field50803__2;
return password_field50803;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field50803);
/**
* Creates a range input field.
*/
sablono.core.range_field50804 = (function() {
var range_field50804 = null;
var range_field50804__1 = (function (name__10089__auto__){return range_field50804.call(null,name__10089__auto__,null);
});
var range_field50804__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1532251402,null))),name__10089__auto__,value__10090__auto__);
});
range_field50804 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return range_field50804__1.call(this,name__10089__auto__);
case 2:
return range_field50804__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field50804.cljs$core$IFn$_invoke$arity$1 = range_field50804__1;
range_field50804.cljs$core$IFn$_invoke$arity$2 = range_field50804__2;
return range_field50804;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field50804);
/**
* Creates a search input field.
*/
sablono.core.search_field50805 = (function() {
var search_field50805 = null;
var search_field50805__1 = (function (name__10089__auto__){return search_field50805.call(null,name__10089__auto__,null);
});
var search_field50805__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",1748098913,null))),name__10089__auto__,value__10090__auto__);
});
search_field50805 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return search_field50805__1.call(this,name__10089__auto__);
case 2:
return search_field50805__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field50805.cljs$core$IFn$_invoke$arity$1 = search_field50805__1;
search_field50805.cljs$core$IFn$_invoke$arity$2 = search_field50805__2;
return search_field50805;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field50805);
/**
* Creates a tel input field.
*/
sablono.core.tel_field50806 = (function() {
var tel_field50806 = null;
var tel_field50806__1 = (function (name__10089__auto__){return tel_field50806.call(null,name__10089__auto__,null);
});
var tel_field50806__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))),name__10089__auto__,value__10090__auto__);
});
tel_field50806 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return tel_field50806__1.call(this,name__10089__auto__);
case 2:
return tel_field50806__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field50806.cljs$core$IFn$_invoke$arity$1 = tel_field50806__1;
tel_field50806.cljs$core$IFn$_invoke$arity$2 = tel_field50806__2;
return tel_field50806;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field50806);
/**
* Creates a text input field.
*/
sablono.core.text_field50807 = (function() {
var text_field50807 = null;
var text_field50807__1 = (function (name__10089__auto__){return text_field50807.call(null,name__10089__auto__,null);
});
var text_field50807__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-1636974874,null))),name__10089__auto__,value__10090__auto__);
});
text_field50807 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return text_field50807__1.call(this,name__10089__auto__);
case 2:
return text_field50807__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field50807.cljs$core$IFn$_invoke$arity$1 = text_field50807__1;
text_field50807.cljs$core$IFn$_invoke$arity$2 = text_field50807__2;
return text_field50807;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field50807);
/**
* Creates a time input field.
*/
sablono.core.time_field50808 = (function() {
var time_field50808 = null;
var time_field50808__1 = (function (name__10089__auto__){return time_field50808.call(null,name__10089__auto__,null);
});
var time_field50808__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1636971386,null))),name__10089__auto__,value__10090__auto__);
});
time_field50808 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return time_field50808__1.call(this,name__10089__auto__);
case 2:
return time_field50808__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field50808.cljs$core$IFn$_invoke$arity$1 = time_field50808__1;
time_field50808.cljs$core$IFn$_invoke$arity$2 = time_field50808__2;
return time_field50808;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field50808);
/**
* Creates a url input field.
*/
sablono.core.url_field50809 = (function() {
var url_field50809 = null;
var url_field50809__1 = (function (name__10089__auto__){return url_field50809.call(null,name__10089__auto__,null);
});
var url_field50809__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",-1640415448,null))),name__10089__auto__,value__10090__auto__);
});
url_field50809 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return url_field50809__1.call(this,name__10089__auto__);
case 2:
return url_field50809__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field50809.cljs$core$IFn$_invoke$arity$1 = url_field50809__1;
url_field50809.cljs$core$IFn$_invoke$arity$2 = url_field50809__2;
return url_field50809;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field50809);
/**
* Creates a week input field.
*/
sablono.core.week_field50810 = (function() {
var week_field50810 = null;
var week_field50810__1 = (function (name__10089__auto__){return week_field50810.call(null,name__10089__auto__,null);
});
var week_field50810__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",-1636886099,null))),name__10089__auto__,value__10090__auto__);
});
week_field50810 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return week_field50810__1.call(this,name__10089__auto__);
case 2:
return week_field50810__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field50810.cljs$core$IFn$_invoke$arity$1 = week_field50810__1;
week_field50810.cljs$core$IFn$_invoke$arity$2 = week_field50810__2;
return week_field50810;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field50810);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box50811 = (function() {
var check_box50811 = null;
var check_box50811__1 = (function (name){return check_box50811.call(null,name,null);
});
var check_box50811__2 = (function (name,checked_QMARK_){return check_box50811.call(null,name,checked_QMARK_,"true");
});
var check_box50811__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box50811 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box50811__1.call(this,name);
case 2:
return check_box50811__2.call(this,name,checked_QMARK_);
case 3:
return check_box50811__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box50811.cljs$core$IFn$_invoke$arity$1 = check_box50811__1;
check_box50811.cljs$core$IFn$_invoke$arity$2 = check_box50811__2;
check_box50811.cljs$core$IFn$_invoke$arity$3 = check_box50811__3;
return check_box50811;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box50811);
/**
* Creates a radio button.
*/
sablono.core.radio_button50812 = (function() {
var radio_button50812 = null;
var radio_button50812__1 = (function (group){return radio_button50812.call(null,group,null);
});
var radio_button50812__2 = (function (group,checked_QMARK_){return radio_button50812.call(null,group,checked_QMARK_,"true");
});
var radio_button50812__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button50812 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button50812__1.call(this,group);
case 2:
return radio_button50812__2.call(this,group,checked_QMARK_);
case 3:
return radio_button50812__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button50812.cljs$core$IFn$_invoke$arity$1 = radio_button50812__1;
radio_button50812.cljs$core$IFn$_invoke$arity$2 = radio_button50812__2;
radio_button50812.cljs$core$IFn$_invoke$arity$3 = radio_button50812__3;
return radio_button50812;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button50812);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options50813 = (function() {
var select_options50813 = null;
var select_options50813__1 = (function (coll){return select_options50813.call(null,coll,null);
});
var select_options50813__2 = (function (coll,selected){var iter__4264__auto__ = (function iter__50822(s__50823){return (new cljs.core.LazySeq(null,(function (){var s__50823__$1 = s__50823;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__50823__$1);if(temp__4126__auto__)
{var s__50823__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50823__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__50823__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__50825 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__50824 = 0;while(true){
if((i__50824 < size__4263__auto__))
{var x = cljs.core._nth.call(null,c__4262__auto__,i__50824);cljs.core.chunk_append.call(null,b__50825,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__50828 = x;var text = cljs.core.nth.call(null,vec__50828,0,null);var val = cljs.core.nth.call(null,vec__50828,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__50828,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options50813.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__50830 = (i__50824 + 1);
i__50824 = G__50830;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50825),iter__50822.call(null,cljs.core.chunk_rest.call(null,s__50823__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50825),null);
}
} else
{var x = cljs.core.first.call(null,s__50823__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__50829 = x;var text = cljs.core.nth.call(null,vec__50829,0,null);var val = cljs.core.nth.call(null,vec__50829,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__50829,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options50813.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__50822.call(null,cljs.core.rest.call(null,s__50823__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,coll);
});
select_options50813 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options50813__1.call(this,coll);
case 2:
return select_options50813__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options50813.cljs$core$IFn$_invoke$arity$1 = select_options50813__1;
select_options50813.cljs$core$IFn$_invoke$arity$2 = select_options50813__2;
return select_options50813;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options50813);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down50831 = (function() {
var drop_down50831 = null;
var drop_down50831__2 = (function (name,options){return drop_down50831.call(null,name,options,null);
});
var drop_down50831__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down50831 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down50831__2.call(this,name,options);
case 3:
return drop_down50831__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down50831.cljs$core$IFn$_invoke$arity$2 = drop_down50831__2;
drop_down50831.cljs$core$IFn$_invoke$arity$3 = drop_down50831__3;
return drop_down50831;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down50831);
/**
* Creates a text area element.
*/
sablono.core.text_area50832 = (function() {
var text_area50832 = null;
var text_area50832__1 = (function (name){return text_area50832.call(null,name,null);
});
var text_area50832__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area50832 = function(name,value){
switch(arguments.length){
case 1:
return text_area50832__1.call(this,name);
case 2:
return text_area50832__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area50832.cljs$core$IFn$_invoke$arity$1 = text_area50832__1;
text_area50832.cljs$core$IFn$_invoke$arity$2 = text_area50832__2;
return text_area50832;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area50832);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label50833 = (function label50833(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label50833);
/**
* Creates a submit button.
*/
sablono.core.submit_button50834 = (function submit_button50834(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button50834);
/**
* Creates a form reset button.
*/
sablono.core.reset_button50835 = (function reset_button50835(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button50835);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to50836 = (function() { 
var form_to50836__delegate = function (p__50837,body){var vec__50839 = p__50837;var method = cljs.core.nth.call(null,vec__50839,0,null);var action = cljs.core.nth.call(null,vec__50839,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to50836 = function (p__50837,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to50836__delegate.call(this,p__50837,body);};
form_to50836.cljs$lang$maxFixedArity = 1;
form_to50836.cljs$lang$applyTo = (function (arglist__50840){
var p__50837 = cljs.core.first(arglist__50840);
var body = cljs.core.rest(arglist__50840);
return form_to50836__delegate(p__50837,body);
});
form_to50836.cljs$core$IFn$_invoke$arity$variadic = form_to50836__delegate;
return form_to50836;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to50836);
