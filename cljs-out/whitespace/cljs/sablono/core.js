// Compiled by ClojureScript 0.0-2322
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
var G__22510__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__22509 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__22509,(0),null);var body = cljs.core.nthnext.call(null,vec__22509,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__22510 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22510__delegate.call(this,args);};
G__22510.cljs$lang$maxFixedArity = 0;
G__22510.cljs$lang$applyTo = (function (arglist__22511){
var args = cljs.core.seq(arglist__22511);
return G__22510__delegate(args);
});
G__22510.cljs$core$IFn$_invoke$arity$variadic = G__22510__delegate;
return G__22510;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__22516(s__22517){return (new cljs.core.LazySeq(null,(function (){var s__22517__$1 = s__22517;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22517__$1);if(temp__4126__auto__)
{var s__22517__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22517__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22517__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22519 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22518 = (0);while(true){
if((i__22518 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__22518);cljs.core.chunk_append.call(null,b__22519,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__22520 = (i__22518 + (1));
i__22518 = G__22520;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22519),iter__22516.call(null,cljs.core.chunk_rest.call(null,s__22517__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22519),null);
}
} else
{var args = cljs.core.first.call(null,s__22517__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__22516.call(null,cljs.core.rest.call(null,s__22517__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__22525(s__22526){return (new cljs.core.LazySeq(null,(function (){var s__22526__$1 = s__22526;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22526__$1);if(temp__4126__auto__)
{var s__22526__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22526__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22526__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22528 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22527 = (0);while(true){
if((i__22527 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__22527);cljs.core.chunk_append.call(null,b__22528,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__22529 = (i__22527 + (1));
i__22527 = G__22529;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22528),iter__22525.call(null,cljs.core.chunk_rest.call(null,s__22526__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22528),null);
}
} else
{var style = cljs.core.first.call(null,s__22526__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__22525.call(null,cljs.core.rest.call(null,s__22526__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__22530){
var styles = cljs.core.seq(arglist__22530);
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
sablono.core.link_to22531 = (function() { 
var link_to22531__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to22531 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to22531__delegate.call(this,url,content);};
link_to22531.cljs$lang$maxFixedArity = 1;
link_to22531.cljs$lang$applyTo = (function (arglist__22532){
var url = cljs.core.first(arglist__22532);
var content = cljs.core.rest(arglist__22532);
return link_to22531__delegate(url,content);
});
link_to22531.cljs$core$IFn$_invoke$arity$variadic = link_to22531__delegate;
return link_to22531;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to22531);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to22533 = (function() { 
var mail_to22533__delegate = function (e_mail,p__22534){var vec__22536 = p__22534;var content = cljs.core.nth.call(null,vec__22536,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to22533 = function (e_mail,var_args){
var p__22534 = null;if (arguments.length > 1) {
  p__22534 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to22533__delegate.call(this,e_mail,p__22534);};
mail_to22533.cljs$lang$maxFixedArity = 1;
mail_to22533.cljs$lang$applyTo = (function (arglist__22537){
var e_mail = cljs.core.first(arglist__22537);
var p__22534 = cljs.core.rest(arglist__22537);
return mail_to22533__delegate(e_mail,p__22534);
});
mail_to22533.cljs$core$IFn$_invoke$arity$variadic = mail_to22533__delegate;
return mail_to22533;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to22533);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list22538 = (function unordered_list22538(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__22543(s__22544){return (new cljs.core.LazySeq(null,(function (){var s__22544__$1 = s__22544;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22544__$1);if(temp__4126__auto__)
{var s__22544__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22544__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22544__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22546 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22545 = (0);while(true){
if((i__22545 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__22545);cljs.core.chunk_append.call(null,b__22546,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__22547 = (i__22545 + (1));
i__22545 = G__22547;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22546),iter__22543.call(null,cljs.core.chunk_rest.call(null,s__22544__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22546),null);
}
} else
{var x = cljs.core.first.call(null,s__22544__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__22543.call(null,cljs.core.rest.call(null,s__22544__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list22538);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list22548 = (function ordered_list22548(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__22553(s__22554){return (new cljs.core.LazySeq(null,(function (){var s__22554__$1 = s__22554;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22554__$1);if(temp__4126__auto__)
{var s__22554__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22554__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22554__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22556 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22555 = (0);while(true){
if((i__22555 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__22555);cljs.core.chunk_append.call(null,b__22556,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__22557 = (i__22555 + (1));
i__22555 = G__22557;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22556),iter__22553.call(null,cljs.core.chunk_rest.call(null,s__22554__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22556),null);
}
} else
{var x = cljs.core.first.call(null,s__22554__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__22553.call(null,cljs.core.rest.call(null,s__22554__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list22548);
/**
* Create an image element.
*/
sablono.core.image22558 = (function() {
var image22558 = null;
var image22558__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image22558__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image22558 = function(src,alt){
switch(arguments.length){
case 1:
return image22558__1.call(this,src);
case 2:
return image22558__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image22558.cljs$core$IFn$_invoke$arity$1 = image22558__1;
image22558.cljs$core$IFn$_invoke$arity$2 = image22558__2;
return image22558;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image22558);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__22559_SHARP_,p2__22560_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22559_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22560_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__22561_SHARP_,p2__22562_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22561_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22562_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field22563 = (function() {
var color_field22563 = null;
var color_field22563__1 = (function (name__13522__auto__){return color_field22563.call(null,name__13522__auto__,null);
});
var color_field22563__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__13522__auto__,value__13523__auto__);
});
color_field22563 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return color_field22563__1.call(this,name__13522__auto__);
case 2:
return color_field22563__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field22563.cljs$core$IFn$_invoke$arity$1 = color_field22563__1;
color_field22563.cljs$core$IFn$_invoke$arity$2 = color_field22563__2;
return color_field22563;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field22563);
/**
* Creates a date input field.
*/
sablono.core.date_field22564 = (function() {
var date_field22564 = null;
var date_field22564__1 = (function (name__13522__auto__){return date_field22564.call(null,name__13522__auto__,null);
});
var date_field22564__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__13522__auto__,value__13523__auto__);
});
date_field22564 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return date_field22564__1.call(this,name__13522__auto__);
case 2:
return date_field22564__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field22564.cljs$core$IFn$_invoke$arity$1 = date_field22564__1;
date_field22564.cljs$core$IFn$_invoke$arity$2 = date_field22564__2;
return date_field22564;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field22564);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field22565 = (function() {
var datetime_field22565 = null;
var datetime_field22565__1 = (function (name__13522__auto__){return datetime_field22565.call(null,name__13522__auto__,null);
});
var datetime_field22565__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__13522__auto__,value__13523__auto__);
});
datetime_field22565 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return datetime_field22565__1.call(this,name__13522__auto__);
case 2:
return datetime_field22565__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field22565.cljs$core$IFn$_invoke$arity$1 = datetime_field22565__1;
datetime_field22565.cljs$core$IFn$_invoke$arity$2 = datetime_field22565__2;
return datetime_field22565;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field22565);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field22566 = (function() {
var datetime_local_field22566 = null;
var datetime_local_field22566__1 = (function (name__13522__auto__){return datetime_local_field22566.call(null,name__13522__auto__,null);
});
var datetime_local_field22566__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__13522__auto__,value__13523__auto__);
});
datetime_local_field22566 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return datetime_local_field22566__1.call(this,name__13522__auto__);
case 2:
return datetime_local_field22566__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field22566.cljs$core$IFn$_invoke$arity$1 = datetime_local_field22566__1;
datetime_local_field22566.cljs$core$IFn$_invoke$arity$2 = datetime_local_field22566__2;
return datetime_local_field22566;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field22566);
/**
* Creates a email input field.
*/
sablono.core.email_field22567 = (function() {
var email_field22567 = null;
var email_field22567__1 = (function (name__13522__auto__){return email_field22567.call(null,name__13522__auto__,null);
});
var email_field22567__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__13522__auto__,value__13523__auto__);
});
email_field22567 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return email_field22567__1.call(this,name__13522__auto__);
case 2:
return email_field22567__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field22567.cljs$core$IFn$_invoke$arity$1 = email_field22567__1;
email_field22567.cljs$core$IFn$_invoke$arity$2 = email_field22567__2;
return email_field22567;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field22567);
/**
* Creates a file input field.
*/
sablono.core.file_field22568 = (function() {
var file_field22568 = null;
var file_field22568__1 = (function (name__13522__auto__){return file_field22568.call(null,name__13522__auto__,null);
});
var file_field22568__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__13522__auto__,value__13523__auto__);
});
file_field22568 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return file_field22568__1.call(this,name__13522__auto__);
case 2:
return file_field22568__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field22568.cljs$core$IFn$_invoke$arity$1 = file_field22568__1;
file_field22568.cljs$core$IFn$_invoke$arity$2 = file_field22568__2;
return file_field22568;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field22568);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field22569 = (function() {
var hidden_field22569 = null;
var hidden_field22569__1 = (function (name__13522__auto__){return hidden_field22569.call(null,name__13522__auto__,null);
});
var hidden_field22569__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__13522__auto__,value__13523__auto__);
});
hidden_field22569 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return hidden_field22569__1.call(this,name__13522__auto__);
case 2:
return hidden_field22569__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field22569.cljs$core$IFn$_invoke$arity$1 = hidden_field22569__1;
hidden_field22569.cljs$core$IFn$_invoke$arity$2 = hidden_field22569__2;
return hidden_field22569;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field22569);
/**
* Creates a month input field.
*/
sablono.core.month_field22570 = (function() {
var month_field22570 = null;
var month_field22570__1 = (function (name__13522__auto__){return month_field22570.call(null,name__13522__auto__,null);
});
var month_field22570__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__13522__auto__,value__13523__auto__);
});
month_field22570 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return month_field22570__1.call(this,name__13522__auto__);
case 2:
return month_field22570__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field22570.cljs$core$IFn$_invoke$arity$1 = month_field22570__1;
month_field22570.cljs$core$IFn$_invoke$arity$2 = month_field22570__2;
return month_field22570;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field22570);
/**
* Creates a number input field.
*/
sablono.core.number_field22571 = (function() {
var number_field22571 = null;
var number_field22571__1 = (function (name__13522__auto__){return number_field22571.call(null,name__13522__auto__,null);
});
var number_field22571__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__13522__auto__,value__13523__auto__);
});
number_field22571 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return number_field22571__1.call(this,name__13522__auto__);
case 2:
return number_field22571__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field22571.cljs$core$IFn$_invoke$arity$1 = number_field22571__1;
number_field22571.cljs$core$IFn$_invoke$arity$2 = number_field22571__2;
return number_field22571;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field22571);
/**
* Creates a password input field.
*/
sablono.core.password_field22572 = (function() {
var password_field22572 = null;
var password_field22572__1 = (function (name__13522__auto__){return password_field22572.call(null,name__13522__auto__,null);
});
var password_field22572__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__13522__auto__,value__13523__auto__);
});
password_field22572 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return password_field22572__1.call(this,name__13522__auto__);
case 2:
return password_field22572__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field22572.cljs$core$IFn$_invoke$arity$1 = password_field22572__1;
password_field22572.cljs$core$IFn$_invoke$arity$2 = password_field22572__2;
return password_field22572;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field22572);
/**
* Creates a range input field.
*/
sablono.core.range_field22573 = (function() {
var range_field22573 = null;
var range_field22573__1 = (function (name__13522__auto__){return range_field22573.call(null,name__13522__auto__,null);
});
var range_field22573__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__13522__auto__,value__13523__auto__);
});
range_field22573 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return range_field22573__1.call(this,name__13522__auto__);
case 2:
return range_field22573__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field22573.cljs$core$IFn$_invoke$arity$1 = range_field22573__1;
range_field22573.cljs$core$IFn$_invoke$arity$2 = range_field22573__2;
return range_field22573;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field22573);
/**
* Creates a search input field.
*/
sablono.core.search_field22574 = (function() {
var search_field22574 = null;
var search_field22574__1 = (function (name__13522__auto__){return search_field22574.call(null,name__13522__auto__,null);
});
var search_field22574__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__13522__auto__,value__13523__auto__);
});
search_field22574 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return search_field22574__1.call(this,name__13522__auto__);
case 2:
return search_field22574__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field22574.cljs$core$IFn$_invoke$arity$1 = search_field22574__1;
search_field22574.cljs$core$IFn$_invoke$arity$2 = search_field22574__2;
return search_field22574;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field22574);
/**
* Creates a tel input field.
*/
sablono.core.tel_field22575 = (function() {
var tel_field22575 = null;
var tel_field22575__1 = (function (name__13522__auto__){return tel_field22575.call(null,name__13522__auto__,null);
});
var tel_field22575__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__13522__auto__,value__13523__auto__);
});
tel_field22575 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return tel_field22575__1.call(this,name__13522__auto__);
case 2:
return tel_field22575__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field22575.cljs$core$IFn$_invoke$arity$1 = tel_field22575__1;
tel_field22575.cljs$core$IFn$_invoke$arity$2 = tel_field22575__2;
return tel_field22575;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field22575);
/**
* Creates a text input field.
*/
sablono.core.text_field22576 = (function() {
var text_field22576 = null;
var text_field22576__1 = (function (name__13522__auto__){return text_field22576.call(null,name__13522__auto__,null);
});
var text_field22576__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__13522__auto__,value__13523__auto__);
});
text_field22576 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return text_field22576__1.call(this,name__13522__auto__);
case 2:
return text_field22576__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field22576.cljs$core$IFn$_invoke$arity$1 = text_field22576__1;
text_field22576.cljs$core$IFn$_invoke$arity$2 = text_field22576__2;
return text_field22576;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field22576);
/**
* Creates a time input field.
*/
sablono.core.time_field22577 = (function() {
var time_field22577 = null;
var time_field22577__1 = (function (name__13522__auto__){return time_field22577.call(null,name__13522__auto__,null);
});
var time_field22577__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__13522__auto__,value__13523__auto__);
});
time_field22577 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return time_field22577__1.call(this,name__13522__auto__);
case 2:
return time_field22577__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field22577.cljs$core$IFn$_invoke$arity$1 = time_field22577__1;
time_field22577.cljs$core$IFn$_invoke$arity$2 = time_field22577__2;
return time_field22577;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field22577);
/**
* Creates a url input field.
*/
sablono.core.url_field22578 = (function() {
var url_field22578 = null;
var url_field22578__1 = (function (name__13522__auto__){return url_field22578.call(null,name__13522__auto__,null);
});
var url_field22578__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__13522__auto__,value__13523__auto__);
});
url_field22578 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return url_field22578__1.call(this,name__13522__auto__);
case 2:
return url_field22578__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field22578.cljs$core$IFn$_invoke$arity$1 = url_field22578__1;
url_field22578.cljs$core$IFn$_invoke$arity$2 = url_field22578__2;
return url_field22578;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field22578);
/**
* Creates a week input field.
*/
sablono.core.week_field22579 = (function() {
var week_field22579 = null;
var week_field22579__1 = (function (name__13522__auto__){return week_field22579.call(null,name__13522__auto__,null);
});
var week_field22579__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__13522__auto__,value__13523__auto__);
});
week_field22579 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return week_field22579__1.call(this,name__13522__auto__);
case 2:
return week_field22579__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field22579.cljs$core$IFn$_invoke$arity$1 = week_field22579__1;
week_field22579.cljs$core$IFn$_invoke$arity$2 = week_field22579__2;
return week_field22579;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field22579);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box22580 = (function() {
var check_box22580 = null;
var check_box22580__1 = (function (name){return check_box22580.call(null,name,null);
});
var check_box22580__2 = (function (name,checked_QMARK_){return check_box22580.call(null,name,checked_QMARK_,"true");
});
var check_box22580__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box22580 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box22580__1.call(this,name);
case 2:
return check_box22580__2.call(this,name,checked_QMARK_);
case 3:
return check_box22580__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box22580.cljs$core$IFn$_invoke$arity$1 = check_box22580__1;
check_box22580.cljs$core$IFn$_invoke$arity$2 = check_box22580__2;
check_box22580.cljs$core$IFn$_invoke$arity$3 = check_box22580__3;
return check_box22580;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box22580);
/**
* Creates a radio button.
*/
sablono.core.radio_button22581 = (function() {
var radio_button22581 = null;
var radio_button22581__1 = (function (group){return radio_button22581.call(null,group,null);
});
var radio_button22581__2 = (function (group,checked_QMARK_){return radio_button22581.call(null,group,checked_QMARK_,"true");
});
var radio_button22581__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button22581 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button22581__1.call(this,group);
case 2:
return radio_button22581__2.call(this,group,checked_QMARK_);
case 3:
return radio_button22581__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button22581.cljs$core$IFn$_invoke$arity$1 = radio_button22581__1;
radio_button22581.cljs$core$IFn$_invoke$arity$2 = radio_button22581__2;
radio_button22581.cljs$core$IFn$_invoke$arity$3 = radio_button22581__3;
return radio_button22581;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button22581);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options22582 = (function() {
var select_options22582 = null;
var select_options22582__1 = (function (coll){return select_options22582.call(null,coll,null);
});
var select_options22582__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__22591(s__22592){return (new cljs.core.LazySeq(null,(function (){var s__22592__$1 = s__22592;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22592__$1);if(temp__4126__auto__)
{var s__22592__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22592__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22592__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22594 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22593 = (0);while(true){
if((i__22593 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__22593);cljs.core.chunk_append.call(null,b__22594,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22597 = x;var text = cljs.core.nth.call(null,vec__22597,(0),null);var val = cljs.core.nth.call(null,vec__22597,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__22597,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options22582.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__22599 = (i__22593 + (1));
i__22593 = G__22599;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22594),iter__22591.call(null,cljs.core.chunk_rest.call(null,s__22592__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22594),null);
}
} else
{var x = cljs.core.first.call(null,s__22592__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22598 = x;var text = cljs.core.nth.call(null,vec__22598,(0),null);var val = cljs.core.nth.call(null,vec__22598,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__22598,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options22582.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__22591.call(null,cljs.core.rest.call(null,s__22592__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options22582 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options22582__1.call(this,coll);
case 2:
return select_options22582__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options22582.cljs$core$IFn$_invoke$arity$1 = select_options22582__1;
select_options22582.cljs$core$IFn$_invoke$arity$2 = select_options22582__2;
return select_options22582;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options22582);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down22600 = (function() {
var drop_down22600 = null;
var drop_down22600__2 = (function (name,options){return drop_down22600.call(null,name,options,null);
});
var drop_down22600__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down22600 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down22600__2.call(this,name,options);
case 3:
return drop_down22600__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down22600.cljs$core$IFn$_invoke$arity$2 = drop_down22600__2;
drop_down22600.cljs$core$IFn$_invoke$arity$3 = drop_down22600__3;
return drop_down22600;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down22600);
/**
* Creates a text area element.
*/
sablono.core.text_area22601 = (function() {
var text_area22601 = null;
var text_area22601__1 = (function (name){return text_area22601.call(null,name,null);
});
var text_area22601__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area22601 = function(name,value){
switch(arguments.length){
case 1:
return text_area22601__1.call(this,name);
case 2:
return text_area22601__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area22601.cljs$core$IFn$_invoke$arity$1 = text_area22601__1;
text_area22601.cljs$core$IFn$_invoke$arity$2 = text_area22601__2;
return text_area22601;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area22601);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label22602 = (function label22602(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label22602);
/**
* Creates a submit button.
*/
sablono.core.submit_button22603 = (function submit_button22603(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button22603);
/**
* Creates a form reset button.
*/
sablono.core.reset_button22604 = (function reset_button22604(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button22604);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to22605 = (function() { 
var form_to22605__delegate = function (p__22606,body){var vec__22608 = p__22606;var method = cljs.core.nth.call(null,vec__22608,(0),null);var action = cljs.core.nth.call(null,vec__22608,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to22605 = function (p__22606,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to22605__delegate.call(this,p__22606,body);};
form_to22605.cljs$lang$maxFixedArity = 1;
form_to22605.cljs$lang$applyTo = (function (arglist__22609){
var p__22606 = cljs.core.first(arglist__22609);
var body = cljs.core.rest(arglist__22609);
return form_to22605__delegate(p__22606,body);
});
form_to22605.cljs$core$IFn$_invoke$arity$variadic = form_to22605__delegate;
return form_to22605;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to22605);
