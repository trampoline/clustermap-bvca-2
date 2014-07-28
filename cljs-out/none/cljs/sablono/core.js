// Compiled by ClojureScript 0.0-2268
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
var G__56700__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__56699 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__56699,(0),null);var body = cljs.core.nthnext.call(null,vec__56699,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__56700 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__56700__delegate.call(this,args);};
G__56700.cljs$lang$maxFixedArity = 0;
G__56700.cljs$lang$applyTo = (function (arglist__56701){
var args = cljs.core.seq(arglist__56701);
return G__56700__delegate(args);
});
G__56700.cljs$core$IFn$_invoke$arity$variadic = G__56700__delegate;
return G__56700;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__56706(s__56707){return (new cljs.core.LazySeq(null,(function (){var s__56707__$1 = s__56707;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56707__$1);if(temp__4126__auto__)
{var s__56707__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56707__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__56707__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__56709 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__56708 = (0);while(true){
if((i__56708 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__56708);cljs.core.chunk_append.call(null,b__56709,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__56710 = (i__56708 + (1));
i__56708 = G__56710;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56709),iter__56706.call(null,cljs.core.chunk_rest.call(null,s__56707__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56709),null);
}
} else
{var args = cljs.core.first.call(null,s__56707__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__56706.call(null,cljs.core.rest.call(null,s__56707__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__56715(s__56716){return (new cljs.core.LazySeq(null,(function (){var s__56716__$1 = s__56716;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56716__$1);if(temp__4126__auto__)
{var s__56716__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56716__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__56716__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__56718 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__56717 = (0);while(true){
if((i__56717 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__56717);cljs.core.chunk_append.call(null,b__56718,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__56719 = (i__56717 + (1));
i__56717 = G__56719;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56718),iter__56715.call(null,cljs.core.chunk_rest.call(null,s__56716__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56718),null);
}
} else
{var style = cljs.core.first.call(null,s__56716__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__56715.call(null,cljs.core.rest.call(null,s__56716__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__56720){
var styles = cljs.core.seq(arglist__56720);
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
sablono.core.link_to56721 = (function() { 
var link_to56721__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to56721 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to56721__delegate.call(this,url,content);};
link_to56721.cljs$lang$maxFixedArity = 1;
link_to56721.cljs$lang$applyTo = (function (arglist__56722){
var url = cljs.core.first(arglist__56722);
var content = cljs.core.rest(arglist__56722);
return link_to56721__delegate(url,content);
});
link_to56721.cljs$core$IFn$_invoke$arity$variadic = link_to56721__delegate;
return link_to56721;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to56721);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to56723 = (function() { 
var mail_to56723__delegate = function (e_mail,p__56724){var vec__56726 = p__56724;var content = cljs.core.nth.call(null,vec__56726,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to56723 = function (e_mail,var_args){
var p__56724 = null;if (arguments.length > 1) {
  p__56724 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to56723__delegate.call(this,e_mail,p__56724);};
mail_to56723.cljs$lang$maxFixedArity = 1;
mail_to56723.cljs$lang$applyTo = (function (arglist__56727){
var e_mail = cljs.core.first(arglist__56727);
var p__56724 = cljs.core.rest(arglist__56727);
return mail_to56723__delegate(e_mail,p__56724);
});
mail_to56723.cljs$core$IFn$_invoke$arity$variadic = mail_to56723__delegate;
return mail_to56723;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to56723);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list56728 = (function unordered_list56728(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__56733(s__56734){return (new cljs.core.LazySeq(null,(function (){var s__56734__$1 = s__56734;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56734__$1);if(temp__4126__auto__)
{var s__56734__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56734__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__56734__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__56736 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__56735 = (0);while(true){
if((i__56735 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__56735);cljs.core.chunk_append.call(null,b__56736,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__56737 = (i__56735 + (1));
i__56735 = G__56737;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56736),iter__56733.call(null,cljs.core.chunk_rest.call(null,s__56734__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56736),null);
}
} else
{var x = cljs.core.first.call(null,s__56734__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__56733.call(null,cljs.core.rest.call(null,s__56734__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list56728);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list56738 = (function ordered_list56738(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__56743(s__56744){return (new cljs.core.LazySeq(null,(function (){var s__56744__$1 = s__56744;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56744__$1);if(temp__4126__auto__)
{var s__56744__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56744__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__56744__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__56746 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__56745 = (0);while(true){
if((i__56745 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__56745);cljs.core.chunk_append.call(null,b__56746,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__56747 = (i__56745 + (1));
i__56745 = G__56747;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56746),iter__56743.call(null,cljs.core.chunk_rest.call(null,s__56744__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56746),null);
}
} else
{var x = cljs.core.first.call(null,s__56744__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__56743.call(null,cljs.core.rest.call(null,s__56744__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list56738);
/**
* Create an image element.
*/
sablono.core.image56748 = (function() {
var image56748 = null;
var image56748__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image56748__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image56748 = function(src,alt){
switch(arguments.length){
case 1:
return image56748__1.call(this,src);
case 2:
return image56748__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image56748.cljs$core$IFn$_invoke$arity$1 = image56748__1;
image56748.cljs$core$IFn$_invoke$arity$2 = image56748__2;
return image56748;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image56748);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__56749_SHARP_,p2__56750_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56749_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__56750_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__56751_SHARP_,p2__56752_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56751_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__56752_SHARP_));
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
sablono.core.color_field56753 = (function() {
var color_field56753 = null;
var color_field56753__1 = (function (name__10462__auto__){return color_field56753.call(null,name__10462__auto__,null);
});
var color_field56753__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10462__auto__,value__10463__auto__);
});
color_field56753 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return color_field56753__1.call(this,name__10462__auto__);
case 2:
return color_field56753__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field56753.cljs$core$IFn$_invoke$arity$1 = color_field56753__1;
color_field56753.cljs$core$IFn$_invoke$arity$2 = color_field56753__2;
return color_field56753;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field56753);
/**
* Creates a date input field.
*/
sablono.core.date_field56754 = (function() {
var date_field56754 = null;
var date_field56754__1 = (function (name__10462__auto__){return date_field56754.call(null,name__10462__auto__,null);
});
var date_field56754__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10462__auto__,value__10463__auto__);
});
date_field56754 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return date_field56754__1.call(this,name__10462__auto__);
case 2:
return date_field56754__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field56754.cljs$core$IFn$_invoke$arity$1 = date_field56754__1;
date_field56754.cljs$core$IFn$_invoke$arity$2 = date_field56754__2;
return date_field56754;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field56754);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field56755 = (function() {
var datetime_field56755 = null;
var datetime_field56755__1 = (function (name__10462__auto__){return datetime_field56755.call(null,name__10462__auto__,null);
});
var datetime_field56755__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10462__auto__,value__10463__auto__);
});
datetime_field56755 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return datetime_field56755__1.call(this,name__10462__auto__);
case 2:
return datetime_field56755__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field56755.cljs$core$IFn$_invoke$arity$1 = datetime_field56755__1;
datetime_field56755.cljs$core$IFn$_invoke$arity$2 = datetime_field56755__2;
return datetime_field56755;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field56755);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field56756 = (function() {
var datetime_local_field56756 = null;
var datetime_local_field56756__1 = (function (name__10462__auto__){return datetime_local_field56756.call(null,name__10462__auto__,null);
});
var datetime_local_field56756__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10462__auto__,value__10463__auto__);
});
datetime_local_field56756 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return datetime_local_field56756__1.call(this,name__10462__auto__);
case 2:
return datetime_local_field56756__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field56756.cljs$core$IFn$_invoke$arity$1 = datetime_local_field56756__1;
datetime_local_field56756.cljs$core$IFn$_invoke$arity$2 = datetime_local_field56756__2;
return datetime_local_field56756;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field56756);
/**
* Creates a email input field.
*/
sablono.core.email_field56757 = (function() {
var email_field56757 = null;
var email_field56757__1 = (function (name__10462__auto__){return email_field56757.call(null,name__10462__auto__,null);
});
var email_field56757__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10462__auto__,value__10463__auto__);
});
email_field56757 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return email_field56757__1.call(this,name__10462__auto__);
case 2:
return email_field56757__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field56757.cljs$core$IFn$_invoke$arity$1 = email_field56757__1;
email_field56757.cljs$core$IFn$_invoke$arity$2 = email_field56757__2;
return email_field56757;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field56757);
/**
* Creates a file input field.
*/
sablono.core.file_field56758 = (function() {
var file_field56758 = null;
var file_field56758__1 = (function (name__10462__auto__){return file_field56758.call(null,name__10462__auto__,null);
});
var file_field56758__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10462__auto__,value__10463__auto__);
});
file_field56758 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return file_field56758__1.call(this,name__10462__auto__);
case 2:
return file_field56758__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field56758.cljs$core$IFn$_invoke$arity$1 = file_field56758__1;
file_field56758.cljs$core$IFn$_invoke$arity$2 = file_field56758__2;
return file_field56758;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field56758);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field56759 = (function() {
var hidden_field56759 = null;
var hidden_field56759__1 = (function (name__10462__auto__){return hidden_field56759.call(null,name__10462__auto__,null);
});
var hidden_field56759__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10462__auto__,value__10463__auto__);
});
hidden_field56759 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return hidden_field56759__1.call(this,name__10462__auto__);
case 2:
return hidden_field56759__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field56759.cljs$core$IFn$_invoke$arity$1 = hidden_field56759__1;
hidden_field56759.cljs$core$IFn$_invoke$arity$2 = hidden_field56759__2;
return hidden_field56759;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field56759);
/**
* Creates a month input field.
*/
sablono.core.month_field56760 = (function() {
var month_field56760 = null;
var month_field56760__1 = (function (name__10462__auto__){return month_field56760.call(null,name__10462__auto__,null);
});
var month_field56760__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10462__auto__,value__10463__auto__);
});
month_field56760 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return month_field56760__1.call(this,name__10462__auto__);
case 2:
return month_field56760__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field56760.cljs$core$IFn$_invoke$arity$1 = month_field56760__1;
month_field56760.cljs$core$IFn$_invoke$arity$2 = month_field56760__2;
return month_field56760;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field56760);
/**
* Creates a number input field.
*/
sablono.core.number_field56761 = (function() {
var number_field56761 = null;
var number_field56761__1 = (function (name__10462__auto__){return number_field56761.call(null,name__10462__auto__,null);
});
var number_field56761__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10462__auto__,value__10463__auto__);
});
number_field56761 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return number_field56761__1.call(this,name__10462__auto__);
case 2:
return number_field56761__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field56761.cljs$core$IFn$_invoke$arity$1 = number_field56761__1;
number_field56761.cljs$core$IFn$_invoke$arity$2 = number_field56761__2;
return number_field56761;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field56761);
/**
* Creates a password input field.
*/
sablono.core.password_field56762 = (function() {
var password_field56762 = null;
var password_field56762__1 = (function (name__10462__auto__){return password_field56762.call(null,name__10462__auto__,null);
});
var password_field56762__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10462__auto__,value__10463__auto__);
});
password_field56762 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return password_field56762__1.call(this,name__10462__auto__);
case 2:
return password_field56762__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field56762.cljs$core$IFn$_invoke$arity$1 = password_field56762__1;
password_field56762.cljs$core$IFn$_invoke$arity$2 = password_field56762__2;
return password_field56762;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field56762);
/**
* Creates a range input field.
*/
sablono.core.range_field56763 = (function() {
var range_field56763 = null;
var range_field56763__1 = (function (name__10462__auto__){return range_field56763.call(null,name__10462__auto__,null);
});
var range_field56763__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10462__auto__,value__10463__auto__);
});
range_field56763 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return range_field56763__1.call(this,name__10462__auto__);
case 2:
return range_field56763__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field56763.cljs$core$IFn$_invoke$arity$1 = range_field56763__1;
range_field56763.cljs$core$IFn$_invoke$arity$2 = range_field56763__2;
return range_field56763;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field56763);
/**
* Creates a search input field.
*/
sablono.core.search_field56764 = (function() {
var search_field56764 = null;
var search_field56764__1 = (function (name__10462__auto__){return search_field56764.call(null,name__10462__auto__,null);
});
var search_field56764__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10462__auto__,value__10463__auto__);
});
search_field56764 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return search_field56764__1.call(this,name__10462__auto__);
case 2:
return search_field56764__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field56764.cljs$core$IFn$_invoke$arity$1 = search_field56764__1;
search_field56764.cljs$core$IFn$_invoke$arity$2 = search_field56764__2;
return search_field56764;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field56764);
/**
* Creates a tel input field.
*/
sablono.core.tel_field56765 = (function() {
var tel_field56765 = null;
var tel_field56765__1 = (function (name__10462__auto__){return tel_field56765.call(null,name__10462__auto__,null);
});
var tel_field56765__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10462__auto__,value__10463__auto__);
});
tel_field56765 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return tel_field56765__1.call(this,name__10462__auto__);
case 2:
return tel_field56765__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field56765.cljs$core$IFn$_invoke$arity$1 = tel_field56765__1;
tel_field56765.cljs$core$IFn$_invoke$arity$2 = tel_field56765__2;
return tel_field56765;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field56765);
/**
* Creates a text input field.
*/
sablono.core.text_field56766 = (function() {
var text_field56766 = null;
var text_field56766__1 = (function (name__10462__auto__){return text_field56766.call(null,name__10462__auto__,null);
});
var text_field56766__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10462__auto__,value__10463__auto__);
});
text_field56766 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return text_field56766__1.call(this,name__10462__auto__);
case 2:
return text_field56766__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field56766.cljs$core$IFn$_invoke$arity$1 = text_field56766__1;
text_field56766.cljs$core$IFn$_invoke$arity$2 = text_field56766__2;
return text_field56766;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field56766);
/**
* Creates a time input field.
*/
sablono.core.time_field56767 = (function() {
var time_field56767 = null;
var time_field56767__1 = (function (name__10462__auto__){return time_field56767.call(null,name__10462__auto__,null);
});
var time_field56767__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10462__auto__,value__10463__auto__);
});
time_field56767 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return time_field56767__1.call(this,name__10462__auto__);
case 2:
return time_field56767__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field56767.cljs$core$IFn$_invoke$arity$1 = time_field56767__1;
time_field56767.cljs$core$IFn$_invoke$arity$2 = time_field56767__2;
return time_field56767;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field56767);
/**
* Creates a url input field.
*/
sablono.core.url_field56768 = (function() {
var url_field56768 = null;
var url_field56768__1 = (function (name__10462__auto__){return url_field56768.call(null,name__10462__auto__,null);
});
var url_field56768__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10462__auto__,value__10463__auto__);
});
url_field56768 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return url_field56768__1.call(this,name__10462__auto__);
case 2:
return url_field56768__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field56768.cljs$core$IFn$_invoke$arity$1 = url_field56768__1;
url_field56768.cljs$core$IFn$_invoke$arity$2 = url_field56768__2;
return url_field56768;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field56768);
/**
* Creates a week input field.
*/
sablono.core.week_field56769 = (function() {
var week_field56769 = null;
var week_field56769__1 = (function (name__10462__auto__){return week_field56769.call(null,name__10462__auto__,null);
});
var week_field56769__2 = (function (name__10462__auto__,value__10463__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10462__auto__,value__10463__auto__);
});
week_field56769 = function(name__10462__auto__,value__10463__auto__){
switch(arguments.length){
case 1:
return week_field56769__1.call(this,name__10462__auto__);
case 2:
return week_field56769__2.call(this,name__10462__auto__,value__10463__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field56769.cljs$core$IFn$_invoke$arity$1 = week_field56769__1;
week_field56769.cljs$core$IFn$_invoke$arity$2 = week_field56769__2;
return week_field56769;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field56769);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box56770 = (function() {
var check_box56770 = null;
var check_box56770__1 = (function (name){return check_box56770.call(null,name,null);
});
var check_box56770__2 = (function (name,checked_QMARK_){return check_box56770.call(null,name,checked_QMARK_,"true");
});
var check_box56770__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box56770 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box56770__1.call(this,name);
case 2:
return check_box56770__2.call(this,name,checked_QMARK_);
case 3:
return check_box56770__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box56770.cljs$core$IFn$_invoke$arity$1 = check_box56770__1;
check_box56770.cljs$core$IFn$_invoke$arity$2 = check_box56770__2;
check_box56770.cljs$core$IFn$_invoke$arity$3 = check_box56770__3;
return check_box56770;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box56770);
/**
* Creates a radio button.
*/
sablono.core.radio_button56771 = (function() {
var radio_button56771 = null;
var radio_button56771__1 = (function (group){return radio_button56771.call(null,group,null);
});
var radio_button56771__2 = (function (group,checked_QMARK_){return radio_button56771.call(null,group,checked_QMARK_,"true");
});
var radio_button56771__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button56771 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button56771__1.call(this,group);
case 2:
return radio_button56771__2.call(this,group,checked_QMARK_);
case 3:
return radio_button56771__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button56771.cljs$core$IFn$_invoke$arity$1 = radio_button56771__1;
radio_button56771.cljs$core$IFn$_invoke$arity$2 = radio_button56771__2;
radio_button56771.cljs$core$IFn$_invoke$arity$3 = radio_button56771__3;
return radio_button56771;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button56771);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options56772 = (function() {
var select_options56772 = null;
var select_options56772__1 = (function (coll){return select_options56772.call(null,coll,null);
});
var select_options56772__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__56781(s__56782){return (new cljs.core.LazySeq(null,(function (){var s__56782__$1 = s__56782;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56782__$1);if(temp__4126__auto__)
{var s__56782__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56782__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__56782__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__56784 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__56783 = (0);while(true){
if((i__56783 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__56783);cljs.core.chunk_append.call(null,b__56784,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__56787 = x;var text = cljs.core.nth.call(null,vec__56787,(0),null);var val = cljs.core.nth.call(null,vec__56787,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__56787,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options56772.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__56789 = (i__56783 + (1));
i__56783 = G__56789;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56784),iter__56781.call(null,cljs.core.chunk_rest.call(null,s__56782__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56784),null);
}
} else
{var x = cljs.core.first.call(null,s__56782__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__56788 = x;var text = cljs.core.nth.call(null,vec__56788,(0),null);var val = cljs.core.nth.call(null,vec__56788,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__56788,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options56772.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__56781.call(null,cljs.core.rest.call(null,s__56782__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options56772 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options56772__1.call(this,coll);
case 2:
return select_options56772__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options56772.cljs$core$IFn$_invoke$arity$1 = select_options56772__1;
select_options56772.cljs$core$IFn$_invoke$arity$2 = select_options56772__2;
return select_options56772;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options56772);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down56790 = (function() {
var drop_down56790 = null;
var drop_down56790__2 = (function (name,options){return drop_down56790.call(null,name,options,null);
});
var drop_down56790__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down56790 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down56790__2.call(this,name,options);
case 3:
return drop_down56790__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down56790.cljs$core$IFn$_invoke$arity$2 = drop_down56790__2;
drop_down56790.cljs$core$IFn$_invoke$arity$3 = drop_down56790__3;
return drop_down56790;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down56790);
/**
* Creates a text area element.
*/
sablono.core.text_area56791 = (function() {
var text_area56791 = null;
var text_area56791__1 = (function (name){return text_area56791.call(null,name,null);
});
var text_area56791__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area56791 = function(name,value){
switch(arguments.length){
case 1:
return text_area56791__1.call(this,name);
case 2:
return text_area56791__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area56791.cljs$core$IFn$_invoke$arity$1 = text_area56791__1;
text_area56791.cljs$core$IFn$_invoke$arity$2 = text_area56791__2;
return text_area56791;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area56791);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label56792 = (function label56792(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label56792);
/**
* Creates a submit button.
*/
sablono.core.submit_button56793 = (function submit_button56793(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button56793);
/**
* Creates a form reset button.
*/
sablono.core.reset_button56794 = (function reset_button56794(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button56794);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to56795 = (function() { 
var form_to56795__delegate = function (p__56796,body){var vec__56798 = p__56796;var method = cljs.core.nth.call(null,vec__56798,(0),null);var action = cljs.core.nth.call(null,vec__56798,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to56795 = function (p__56796,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to56795__delegate.call(this,p__56796,body);};
form_to56795.cljs$lang$maxFixedArity = 1;
form_to56795.cljs$lang$applyTo = (function (arglist__56799){
var p__56796 = cljs.core.first(arglist__56799);
var body = cljs.core.rest(arglist__56799);
return form_to56795__delegate(p__56796,body);
});
form_to56795.cljs$core$IFn$_invoke$arity$variadic = form_to56795__delegate;
return form_to56795;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to56795);

//# sourceMappingURL=core.js.map