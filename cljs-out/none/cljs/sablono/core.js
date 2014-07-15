// Compiled by ClojureScript 0.0-2261
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
var G__51740__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__51739 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__51739,(0),null);var body = cljs.core.nthnext.call(null,vec__51739,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__51740 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__51740__delegate.call(this,args);};
G__51740.cljs$lang$maxFixedArity = 0;
G__51740.cljs$lang$applyTo = (function (arglist__51741){
var args = cljs.core.seq(arglist__51741);
return G__51740__delegate(args);
});
G__51740.cljs$core$IFn$_invoke$arity$variadic = G__51740__delegate;
return G__51740;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__51746(s__51747){return (new cljs.core.LazySeq(null,(function (){var s__51747__$1 = s__51747;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51747__$1);if(temp__4126__auto__)
{var s__51747__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51747__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__51747__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__51749 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__51748 = (0);while(true){
if((i__51748 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__51748);cljs.core.chunk_append.call(null,b__51749,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__51750 = (i__51748 + (1));
i__51748 = G__51750;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51749),iter__51746.call(null,cljs.core.chunk_rest.call(null,s__51747__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51749),null);
}
} else
{var args = cljs.core.first.call(null,s__51747__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__51746.call(null,cljs.core.rest.call(null,s__51747__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__51755(s__51756){return (new cljs.core.LazySeq(null,(function (){var s__51756__$1 = s__51756;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51756__$1);if(temp__4126__auto__)
{var s__51756__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51756__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__51756__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__51758 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__51757 = (0);while(true){
if((i__51757 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__51757);cljs.core.chunk_append.call(null,b__51758,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__51759 = (i__51757 + (1));
i__51757 = G__51759;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51758),iter__51755.call(null,cljs.core.chunk_rest.call(null,s__51756__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51758),null);
}
} else
{var style = cljs.core.first.call(null,s__51756__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__51755.call(null,cljs.core.rest.call(null,s__51756__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__51760){
var styles = cljs.core.seq(arglist__51760);
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
sablono.core.link_to51761 = (function() { 
var link_to51761__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to51761 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to51761__delegate.call(this,url,content);};
link_to51761.cljs$lang$maxFixedArity = 1;
link_to51761.cljs$lang$applyTo = (function (arglist__51762){
var url = cljs.core.first(arglist__51762);
var content = cljs.core.rest(arglist__51762);
return link_to51761__delegate(url,content);
});
link_to51761.cljs$core$IFn$_invoke$arity$variadic = link_to51761__delegate;
return link_to51761;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to51761);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to51763 = (function() { 
var mail_to51763__delegate = function (e_mail,p__51764){var vec__51766 = p__51764;var content = cljs.core.nth.call(null,vec__51766,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to51763 = function (e_mail,var_args){
var p__51764 = null;if (arguments.length > 1) {
  p__51764 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to51763__delegate.call(this,e_mail,p__51764);};
mail_to51763.cljs$lang$maxFixedArity = 1;
mail_to51763.cljs$lang$applyTo = (function (arglist__51767){
var e_mail = cljs.core.first(arglist__51767);
var p__51764 = cljs.core.rest(arglist__51767);
return mail_to51763__delegate(e_mail,p__51764);
});
mail_to51763.cljs$core$IFn$_invoke$arity$variadic = mail_to51763__delegate;
return mail_to51763;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to51763);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list51768 = (function unordered_list51768(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__51773(s__51774){return (new cljs.core.LazySeq(null,(function (){var s__51774__$1 = s__51774;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51774__$1);if(temp__4126__auto__)
{var s__51774__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51774__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__51774__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__51776 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__51775 = (0);while(true){
if((i__51775 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__51775);cljs.core.chunk_append.call(null,b__51776,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__51777 = (i__51775 + (1));
i__51775 = G__51777;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51776),iter__51773.call(null,cljs.core.chunk_rest.call(null,s__51774__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51776),null);
}
} else
{var x = cljs.core.first.call(null,s__51774__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__51773.call(null,cljs.core.rest.call(null,s__51774__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list51768);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list51778 = (function ordered_list51778(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__51783(s__51784){return (new cljs.core.LazySeq(null,(function (){var s__51784__$1 = s__51784;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51784__$1);if(temp__4126__auto__)
{var s__51784__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51784__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__51784__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__51786 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__51785 = (0);while(true){
if((i__51785 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__51785);cljs.core.chunk_append.call(null,b__51786,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__51787 = (i__51785 + (1));
i__51785 = G__51787;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51786),iter__51783.call(null,cljs.core.chunk_rest.call(null,s__51784__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51786),null);
}
} else
{var x = cljs.core.first.call(null,s__51784__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__51783.call(null,cljs.core.rest.call(null,s__51784__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list51778);
/**
* Create an image element.
*/
sablono.core.image51788 = (function() {
var image51788 = null;
var image51788__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image51788__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image51788 = function(src,alt){
switch(arguments.length){
case 1:
return image51788__1.call(this,src);
case 2:
return image51788__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image51788.cljs$core$IFn$_invoke$arity$1 = image51788__1;
image51788.cljs$core$IFn$_invoke$arity$2 = image51788__2;
return image51788;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image51788);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__51789_SHARP_,p2__51790_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51789_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__51790_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__51791_SHARP_,p2__51792_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51791_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__51792_SHARP_));
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
sablono.core.color_field51793 = (function() {
var color_field51793 = null;
var color_field51793__1 = (function (name__10195__auto__){return color_field51793.call(null,name__10195__auto__,null);
});
var color_field51793__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10195__auto__,value__10196__auto__);
});
color_field51793 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return color_field51793__1.call(this,name__10195__auto__);
case 2:
return color_field51793__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field51793.cljs$core$IFn$_invoke$arity$1 = color_field51793__1;
color_field51793.cljs$core$IFn$_invoke$arity$2 = color_field51793__2;
return color_field51793;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field51793);
/**
* Creates a date input field.
*/
sablono.core.date_field51794 = (function() {
var date_field51794 = null;
var date_field51794__1 = (function (name__10195__auto__){return date_field51794.call(null,name__10195__auto__,null);
});
var date_field51794__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10195__auto__,value__10196__auto__);
});
date_field51794 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return date_field51794__1.call(this,name__10195__auto__);
case 2:
return date_field51794__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field51794.cljs$core$IFn$_invoke$arity$1 = date_field51794__1;
date_field51794.cljs$core$IFn$_invoke$arity$2 = date_field51794__2;
return date_field51794;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field51794);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field51795 = (function() {
var datetime_field51795 = null;
var datetime_field51795__1 = (function (name__10195__auto__){return datetime_field51795.call(null,name__10195__auto__,null);
});
var datetime_field51795__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10195__auto__,value__10196__auto__);
});
datetime_field51795 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return datetime_field51795__1.call(this,name__10195__auto__);
case 2:
return datetime_field51795__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field51795.cljs$core$IFn$_invoke$arity$1 = datetime_field51795__1;
datetime_field51795.cljs$core$IFn$_invoke$arity$2 = datetime_field51795__2;
return datetime_field51795;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field51795);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field51796 = (function() {
var datetime_local_field51796 = null;
var datetime_local_field51796__1 = (function (name__10195__auto__){return datetime_local_field51796.call(null,name__10195__auto__,null);
});
var datetime_local_field51796__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10195__auto__,value__10196__auto__);
});
datetime_local_field51796 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return datetime_local_field51796__1.call(this,name__10195__auto__);
case 2:
return datetime_local_field51796__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field51796.cljs$core$IFn$_invoke$arity$1 = datetime_local_field51796__1;
datetime_local_field51796.cljs$core$IFn$_invoke$arity$2 = datetime_local_field51796__2;
return datetime_local_field51796;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field51796);
/**
* Creates a email input field.
*/
sablono.core.email_field51797 = (function() {
var email_field51797 = null;
var email_field51797__1 = (function (name__10195__auto__){return email_field51797.call(null,name__10195__auto__,null);
});
var email_field51797__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10195__auto__,value__10196__auto__);
});
email_field51797 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return email_field51797__1.call(this,name__10195__auto__);
case 2:
return email_field51797__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field51797.cljs$core$IFn$_invoke$arity$1 = email_field51797__1;
email_field51797.cljs$core$IFn$_invoke$arity$2 = email_field51797__2;
return email_field51797;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field51797);
/**
* Creates a file input field.
*/
sablono.core.file_field51798 = (function() {
var file_field51798 = null;
var file_field51798__1 = (function (name__10195__auto__){return file_field51798.call(null,name__10195__auto__,null);
});
var file_field51798__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10195__auto__,value__10196__auto__);
});
file_field51798 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return file_field51798__1.call(this,name__10195__auto__);
case 2:
return file_field51798__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field51798.cljs$core$IFn$_invoke$arity$1 = file_field51798__1;
file_field51798.cljs$core$IFn$_invoke$arity$2 = file_field51798__2;
return file_field51798;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field51798);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field51799 = (function() {
var hidden_field51799 = null;
var hidden_field51799__1 = (function (name__10195__auto__){return hidden_field51799.call(null,name__10195__auto__,null);
});
var hidden_field51799__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10195__auto__,value__10196__auto__);
});
hidden_field51799 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return hidden_field51799__1.call(this,name__10195__auto__);
case 2:
return hidden_field51799__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field51799.cljs$core$IFn$_invoke$arity$1 = hidden_field51799__1;
hidden_field51799.cljs$core$IFn$_invoke$arity$2 = hidden_field51799__2;
return hidden_field51799;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field51799);
/**
* Creates a month input field.
*/
sablono.core.month_field51800 = (function() {
var month_field51800 = null;
var month_field51800__1 = (function (name__10195__auto__){return month_field51800.call(null,name__10195__auto__,null);
});
var month_field51800__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10195__auto__,value__10196__auto__);
});
month_field51800 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return month_field51800__1.call(this,name__10195__auto__);
case 2:
return month_field51800__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field51800.cljs$core$IFn$_invoke$arity$1 = month_field51800__1;
month_field51800.cljs$core$IFn$_invoke$arity$2 = month_field51800__2;
return month_field51800;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field51800);
/**
* Creates a number input field.
*/
sablono.core.number_field51801 = (function() {
var number_field51801 = null;
var number_field51801__1 = (function (name__10195__auto__){return number_field51801.call(null,name__10195__auto__,null);
});
var number_field51801__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10195__auto__,value__10196__auto__);
});
number_field51801 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return number_field51801__1.call(this,name__10195__auto__);
case 2:
return number_field51801__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field51801.cljs$core$IFn$_invoke$arity$1 = number_field51801__1;
number_field51801.cljs$core$IFn$_invoke$arity$2 = number_field51801__2;
return number_field51801;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field51801);
/**
* Creates a password input field.
*/
sablono.core.password_field51802 = (function() {
var password_field51802 = null;
var password_field51802__1 = (function (name__10195__auto__){return password_field51802.call(null,name__10195__auto__,null);
});
var password_field51802__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10195__auto__,value__10196__auto__);
});
password_field51802 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return password_field51802__1.call(this,name__10195__auto__);
case 2:
return password_field51802__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field51802.cljs$core$IFn$_invoke$arity$1 = password_field51802__1;
password_field51802.cljs$core$IFn$_invoke$arity$2 = password_field51802__2;
return password_field51802;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field51802);
/**
* Creates a range input field.
*/
sablono.core.range_field51803 = (function() {
var range_field51803 = null;
var range_field51803__1 = (function (name__10195__auto__){return range_field51803.call(null,name__10195__auto__,null);
});
var range_field51803__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10195__auto__,value__10196__auto__);
});
range_field51803 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return range_field51803__1.call(this,name__10195__auto__);
case 2:
return range_field51803__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field51803.cljs$core$IFn$_invoke$arity$1 = range_field51803__1;
range_field51803.cljs$core$IFn$_invoke$arity$2 = range_field51803__2;
return range_field51803;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field51803);
/**
* Creates a search input field.
*/
sablono.core.search_field51804 = (function() {
var search_field51804 = null;
var search_field51804__1 = (function (name__10195__auto__){return search_field51804.call(null,name__10195__auto__,null);
});
var search_field51804__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10195__auto__,value__10196__auto__);
});
search_field51804 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return search_field51804__1.call(this,name__10195__auto__);
case 2:
return search_field51804__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field51804.cljs$core$IFn$_invoke$arity$1 = search_field51804__1;
search_field51804.cljs$core$IFn$_invoke$arity$2 = search_field51804__2;
return search_field51804;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field51804);
/**
* Creates a tel input field.
*/
sablono.core.tel_field51805 = (function() {
var tel_field51805 = null;
var tel_field51805__1 = (function (name__10195__auto__){return tel_field51805.call(null,name__10195__auto__,null);
});
var tel_field51805__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10195__auto__,value__10196__auto__);
});
tel_field51805 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return tel_field51805__1.call(this,name__10195__auto__);
case 2:
return tel_field51805__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field51805.cljs$core$IFn$_invoke$arity$1 = tel_field51805__1;
tel_field51805.cljs$core$IFn$_invoke$arity$2 = tel_field51805__2;
return tel_field51805;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field51805);
/**
* Creates a text input field.
*/
sablono.core.text_field51806 = (function() {
var text_field51806 = null;
var text_field51806__1 = (function (name__10195__auto__){return text_field51806.call(null,name__10195__auto__,null);
});
var text_field51806__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10195__auto__,value__10196__auto__);
});
text_field51806 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return text_field51806__1.call(this,name__10195__auto__);
case 2:
return text_field51806__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field51806.cljs$core$IFn$_invoke$arity$1 = text_field51806__1;
text_field51806.cljs$core$IFn$_invoke$arity$2 = text_field51806__2;
return text_field51806;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field51806);
/**
* Creates a time input field.
*/
sablono.core.time_field51807 = (function() {
var time_field51807 = null;
var time_field51807__1 = (function (name__10195__auto__){return time_field51807.call(null,name__10195__auto__,null);
});
var time_field51807__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10195__auto__,value__10196__auto__);
});
time_field51807 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return time_field51807__1.call(this,name__10195__auto__);
case 2:
return time_field51807__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field51807.cljs$core$IFn$_invoke$arity$1 = time_field51807__1;
time_field51807.cljs$core$IFn$_invoke$arity$2 = time_field51807__2;
return time_field51807;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field51807);
/**
* Creates a url input field.
*/
sablono.core.url_field51808 = (function() {
var url_field51808 = null;
var url_field51808__1 = (function (name__10195__auto__){return url_field51808.call(null,name__10195__auto__,null);
});
var url_field51808__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10195__auto__,value__10196__auto__);
});
url_field51808 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return url_field51808__1.call(this,name__10195__auto__);
case 2:
return url_field51808__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field51808.cljs$core$IFn$_invoke$arity$1 = url_field51808__1;
url_field51808.cljs$core$IFn$_invoke$arity$2 = url_field51808__2;
return url_field51808;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field51808);
/**
* Creates a week input field.
*/
sablono.core.week_field51809 = (function() {
var week_field51809 = null;
var week_field51809__1 = (function (name__10195__auto__){return week_field51809.call(null,name__10195__auto__,null);
});
var week_field51809__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10195__auto__,value__10196__auto__);
});
week_field51809 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return week_field51809__1.call(this,name__10195__auto__);
case 2:
return week_field51809__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field51809.cljs$core$IFn$_invoke$arity$1 = week_field51809__1;
week_field51809.cljs$core$IFn$_invoke$arity$2 = week_field51809__2;
return week_field51809;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field51809);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box51810 = (function() {
var check_box51810 = null;
var check_box51810__1 = (function (name){return check_box51810.call(null,name,null);
});
var check_box51810__2 = (function (name,checked_QMARK_){return check_box51810.call(null,name,checked_QMARK_,"true");
});
var check_box51810__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box51810 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box51810__1.call(this,name);
case 2:
return check_box51810__2.call(this,name,checked_QMARK_);
case 3:
return check_box51810__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box51810.cljs$core$IFn$_invoke$arity$1 = check_box51810__1;
check_box51810.cljs$core$IFn$_invoke$arity$2 = check_box51810__2;
check_box51810.cljs$core$IFn$_invoke$arity$3 = check_box51810__3;
return check_box51810;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box51810);
/**
* Creates a radio button.
*/
sablono.core.radio_button51811 = (function() {
var radio_button51811 = null;
var radio_button51811__1 = (function (group){return radio_button51811.call(null,group,null);
});
var radio_button51811__2 = (function (group,checked_QMARK_){return radio_button51811.call(null,group,checked_QMARK_,"true");
});
var radio_button51811__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button51811 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button51811__1.call(this,group);
case 2:
return radio_button51811__2.call(this,group,checked_QMARK_);
case 3:
return radio_button51811__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button51811.cljs$core$IFn$_invoke$arity$1 = radio_button51811__1;
radio_button51811.cljs$core$IFn$_invoke$arity$2 = radio_button51811__2;
radio_button51811.cljs$core$IFn$_invoke$arity$3 = radio_button51811__3;
return radio_button51811;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button51811);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options51812 = (function() {
var select_options51812 = null;
var select_options51812__1 = (function (coll){return select_options51812.call(null,coll,null);
});
var select_options51812__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__51821(s__51822){return (new cljs.core.LazySeq(null,(function (){var s__51822__$1 = s__51822;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51822__$1);if(temp__4126__auto__)
{var s__51822__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51822__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__51822__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__51824 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__51823 = (0);while(true){
if((i__51823 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__51823);cljs.core.chunk_append.call(null,b__51824,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__51827 = x;var text = cljs.core.nth.call(null,vec__51827,(0),null);var val = cljs.core.nth.call(null,vec__51827,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__51827,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options51812.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__51829 = (i__51823 + (1));
i__51823 = G__51829;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51824),iter__51821.call(null,cljs.core.chunk_rest.call(null,s__51822__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51824),null);
}
} else
{var x = cljs.core.first.call(null,s__51822__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__51828 = x;var text = cljs.core.nth.call(null,vec__51828,(0),null);var val = cljs.core.nth.call(null,vec__51828,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__51828,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options51812.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__51821.call(null,cljs.core.rest.call(null,s__51822__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options51812 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options51812__1.call(this,coll);
case 2:
return select_options51812__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options51812.cljs$core$IFn$_invoke$arity$1 = select_options51812__1;
select_options51812.cljs$core$IFn$_invoke$arity$2 = select_options51812__2;
return select_options51812;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options51812);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down51830 = (function() {
var drop_down51830 = null;
var drop_down51830__2 = (function (name,options){return drop_down51830.call(null,name,options,null);
});
var drop_down51830__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down51830 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down51830__2.call(this,name,options);
case 3:
return drop_down51830__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down51830.cljs$core$IFn$_invoke$arity$2 = drop_down51830__2;
drop_down51830.cljs$core$IFn$_invoke$arity$3 = drop_down51830__3;
return drop_down51830;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down51830);
/**
* Creates a text area element.
*/
sablono.core.text_area51831 = (function() {
var text_area51831 = null;
var text_area51831__1 = (function (name){return text_area51831.call(null,name,null);
});
var text_area51831__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area51831 = function(name,value){
switch(arguments.length){
case 1:
return text_area51831__1.call(this,name);
case 2:
return text_area51831__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area51831.cljs$core$IFn$_invoke$arity$1 = text_area51831__1;
text_area51831.cljs$core$IFn$_invoke$arity$2 = text_area51831__2;
return text_area51831;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area51831);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label51832 = (function label51832(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label51832);
/**
* Creates a submit button.
*/
sablono.core.submit_button51833 = (function submit_button51833(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button51833);
/**
* Creates a form reset button.
*/
sablono.core.reset_button51834 = (function reset_button51834(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button51834);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to51835 = (function() { 
var form_to51835__delegate = function (p__51836,body){var vec__51838 = p__51836;var method = cljs.core.nth.call(null,vec__51838,(0),null);var action = cljs.core.nth.call(null,vec__51838,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to51835 = function (p__51836,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to51835__delegate.call(this,p__51836,body);};
form_to51835.cljs$lang$maxFixedArity = 1;
form_to51835.cljs$lang$applyTo = (function (arglist__51839){
var p__51836 = cljs.core.first(arglist__51839);
var body = cljs.core.rest(arglist__51839);
return form_to51835__delegate(p__51836,body);
});
form_to51835.cljs$core$IFn$_invoke$arity$variadic = form_to51835__delegate;
return form_to51835;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to51835);

//# sourceMappingURL=core.js.map