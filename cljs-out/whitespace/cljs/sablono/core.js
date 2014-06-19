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
var G__50773__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__50772 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__50772,0,null);var body = cljs.core.nthnext.call(null,vec__50772,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__50773 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__50773__delegate.call(this,args);};
G__50773.cljs$lang$maxFixedArity = 0;
G__50773.cljs$lang$applyTo = (function (arglist__50774){
var args = cljs.core.seq(arglist__50774);
return G__50773__delegate(args);
});
G__50773.cljs$core$IFn$_invoke$arity$variadic = G__50773__delegate;
return G__50773;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4264__auto__ = (function iter__50779(s__50780){return (new cljs.core.LazySeq(null,(function (){var s__50780__$1 = s__50780;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__50780__$1);if(temp__4126__auto__)
{var s__50780__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50780__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__50780__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__50782 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__50781 = 0;while(true){
if((i__50781 < size__4263__auto__))
{var args = cljs.core._nth.call(null,c__4262__auto__,i__50781);cljs.core.chunk_append.call(null,b__50782,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__50783 = (i__50781 + 1);
i__50781 = G__50783;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50782),iter__50779.call(null,cljs.core.chunk_rest.call(null,s__50780__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50782),null);
}
} else
{var args = cljs.core.first.call(null,s__50780__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__50779.call(null,cljs.core.rest.call(null,s__50780__$2)));
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
var include_css__delegate = function (styles){var iter__4264__auto__ = (function iter__50788(s__50789){return (new cljs.core.LazySeq(null,(function (){var s__50789__$1 = s__50789;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__50789__$1);if(temp__4126__auto__)
{var s__50789__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50789__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__50789__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__50791 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__50790 = 0;while(true){
if((i__50790 < size__4263__auto__))
{var style = cljs.core._nth.call(null,c__4262__auto__,i__50790);cljs.core.chunk_append.call(null,b__50791,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__50792 = (i__50790 + 1);
i__50790 = G__50792;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50791),iter__50788.call(null,cljs.core.chunk_rest.call(null,s__50789__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50791),null);
}
} else
{var style = cljs.core.first.call(null,s__50789__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__50788.call(null,cljs.core.rest.call(null,s__50789__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__50793){
var styles = cljs.core.seq(arglist__50793);
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
sablono.core.link_to50794 = (function() { 
var link_to50794__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to50794 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to50794__delegate.call(this,url,content);};
link_to50794.cljs$lang$maxFixedArity = 1;
link_to50794.cljs$lang$applyTo = (function (arglist__50795){
var url = cljs.core.first(arglist__50795);
var content = cljs.core.rest(arglist__50795);
return link_to50794__delegate(url,content);
});
link_to50794.cljs$core$IFn$_invoke$arity$variadic = link_to50794__delegate;
return link_to50794;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to50794);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to50796 = (function() { 
var mail_to50796__delegate = function (e_mail,p__50797){var vec__50799 = p__50797;var content = cljs.core.nth.call(null,vec__50799,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3539__auto__ = content;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to50796 = function (e_mail,var_args){
var p__50797 = null;if (arguments.length > 1) {
  p__50797 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to50796__delegate.call(this,e_mail,p__50797);};
mail_to50796.cljs$lang$maxFixedArity = 1;
mail_to50796.cljs$lang$applyTo = (function (arglist__50800){
var e_mail = cljs.core.first(arglist__50800);
var p__50797 = cljs.core.rest(arglist__50800);
return mail_to50796__delegate(e_mail,p__50797);
});
mail_to50796.cljs$core$IFn$_invoke$arity$variadic = mail_to50796__delegate;
return mail_to50796;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to50796);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list50801 = (function unordered_list50801(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4264__auto__ = (function iter__50806(s__50807){return (new cljs.core.LazySeq(null,(function (){var s__50807__$1 = s__50807;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__50807__$1);if(temp__4126__auto__)
{var s__50807__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50807__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__50807__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__50809 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__50808 = 0;while(true){
if((i__50808 < size__4263__auto__))
{var x = cljs.core._nth.call(null,c__4262__auto__,i__50808);cljs.core.chunk_append.call(null,b__50809,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__50810 = (i__50808 + 1);
i__50808 = G__50810;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50809),iter__50806.call(null,cljs.core.chunk_rest.call(null,s__50807__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50809),null);
}
} else
{var x = cljs.core.first.call(null,s__50807__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__50806.call(null,cljs.core.rest.call(null,s__50807__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list50801);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list50811 = (function ordered_list50811(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4264__auto__ = (function iter__50816(s__50817){return (new cljs.core.LazySeq(null,(function (){var s__50817__$1 = s__50817;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__50817__$1);if(temp__4126__auto__)
{var s__50817__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50817__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__50817__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__50819 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__50818 = 0;while(true){
if((i__50818 < size__4263__auto__))
{var x = cljs.core._nth.call(null,c__4262__auto__,i__50818);cljs.core.chunk_append.call(null,b__50819,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__50820 = (i__50818 + 1);
i__50818 = G__50820;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50819),iter__50816.call(null,cljs.core.chunk_rest.call(null,s__50817__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50819),null);
}
} else
{var x = cljs.core.first.call(null,s__50817__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__50816.call(null,cljs.core.rest.call(null,s__50817__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list50811);
/**
* Create an image element.
*/
sablono.core.image50821 = (function() {
var image50821 = null;
var image50821__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image50821__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image50821 = function(src,alt){
switch(arguments.length){
case 1:
return image50821__1.call(this,src);
case 2:
return image50821__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image50821.cljs$core$IFn$_invoke$arity$1 = image50821__1;
image50821.cljs$core$IFn$_invoke$arity$2 = image50821__2;
return image50821;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image50821);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__50822_SHARP_,p2__50823_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50822_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__50823_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__50824_SHARP_,p2__50825_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50824_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__50825_SHARP_));
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
sablono.core.color_field50826 = (function() {
var color_field50826 = null;
var color_field50826__1 = (function (name__10089__auto__){return color_field50826.call(null,name__10089__auto__,null);
});
var color_field50826__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1545688804,null))),name__10089__auto__,value__10090__auto__);
});
color_field50826 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return color_field50826__1.call(this,name__10089__auto__);
case 2:
return color_field50826__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field50826.cljs$core$IFn$_invoke$arity$1 = color_field50826__1;
color_field50826.cljs$core$IFn$_invoke$arity$2 = color_field50826__2;
return color_field50826;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field50826);
/**
* Creates a date input field.
*/
sablono.core.date_field50827 = (function() {
var date_field50827 = null;
var date_field50827__1 = (function (name__10089__auto__){return date_field50827.call(null,name__10089__auto__,null);
});
var date_field50827__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",-1637455513,null))),name__10089__auto__,value__10090__auto__);
});
date_field50827 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return date_field50827__1.call(this,name__10089__auto__);
case 2:
return date_field50827__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field50827.cljs$core$IFn$_invoke$arity$1 = date_field50827__1;
date_field50827.cljs$core$IFn$_invoke$arity$2 = date_field50827__2;
return date_field50827;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field50827);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field50828 = (function() {
var datetime_field50828 = null;
var datetime_field50828__1 = (function (name__10089__auto__){return datetime_field50828.call(null,name__10089__auto__,null);
});
var datetime_field50828__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))),name__10089__auto__,value__10090__auto__);
});
datetime_field50828 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return datetime_field50828__1.call(this,name__10089__auto__);
case 2:
return datetime_field50828__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field50828.cljs$core$IFn$_invoke$arity$1 = datetime_field50828__1;
datetime_field50828.cljs$core$IFn$_invoke$arity$2 = datetime_field50828__2;
return datetime_field50828;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field50828);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field50829 = (function() {
var datetime_local_field50829 = null;
var datetime_local_field50829__1 = (function (name__10089__auto__){return datetime_local_field50829.call(null,name__10089__auto__,null);
});
var datetime_local_field50829__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))),name__10089__auto__,value__10090__auto__);
});
datetime_local_field50829 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return datetime_local_field50829__1.call(this,name__10089__auto__);
case 2:
return datetime_local_field50829__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field50829.cljs$core$IFn$_invoke$arity$1 = datetime_local_field50829__1;
datetime_local_field50829.cljs$core$IFn$_invoke$arity$2 = datetime_local_field50829__2;
return datetime_local_field50829;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field50829);
/**
* Creates a email input field.
*/
sablono.core.email_field50830 = (function() {
var email_field50830 = null;
var email_field50830__1 = (function (name__10089__auto__){return email_field50830.call(null,name__10089__auto__,null);
});
var email_field50830__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1543912107,null))),name__10089__auto__,value__10090__auto__);
});
email_field50830 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return email_field50830__1.call(this,name__10089__auto__);
case 2:
return email_field50830__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field50830.cljs$core$IFn$_invoke$arity$1 = email_field50830__1;
email_field50830.cljs$core$IFn$_invoke$arity$2 = email_field50830__2;
return email_field50830;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field50830);
/**
* Creates a file input field.
*/
sablono.core.file_field50831 = (function() {
var file_field50831 = null;
var file_field50831__1 = (function (name__10089__auto__){return file_field50831.call(null,name__10089__auto__,null);
});
var file_field50831__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",-1637388491,null))),name__10089__auto__,value__10090__auto__);
});
file_field50831 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return file_field50831__1.call(this,name__10089__auto__);
case 2:
return file_field50831__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field50831.cljs$core$IFn$_invoke$arity$1 = file_field50831__1;
file_field50831.cljs$core$IFn$_invoke$arity$2 = file_field50831__2;
return file_field50831;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field50831);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field50832 = (function() {
var hidden_field50832 = null;
var hidden_field50832__1 = (function (name__10089__auto__){return hidden_field50832.call(null,name__10089__auto__,null);
});
var hidden_field50832__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))),name__10089__auto__,value__10090__auto__);
});
hidden_field50832 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return hidden_field50832__1.call(this,name__10089__auto__);
case 2:
return hidden_field50832__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field50832.cljs$core$IFn$_invoke$arity$1 = hidden_field50832__1;
hidden_field50832.cljs$core$IFn$_invoke$arity$2 = hidden_field50832__2;
return hidden_field50832;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field50832);
/**
* Creates a month input field.
*/
sablono.core.month_field50833 = (function() {
var month_field50833 = null;
var month_field50833__1 = (function (name__10089__auto__){return month_field50833.call(null,name__10089__auto__,null);
});
var month_field50833__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-1536451527,null))),name__10089__auto__,value__10090__auto__);
});
month_field50833 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return month_field50833__1.call(this,name__10089__auto__);
case 2:
return month_field50833__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field50833.cljs$core$IFn$_invoke$arity$1 = month_field50833__1;
month_field50833.cljs$core$IFn$_invoke$arity$2 = month_field50833__2;
return month_field50833;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field50833);
/**
* Creates a number input field.
*/
sablono.core.number_field50834 = (function() {
var number_field50834 = null;
var number_field50834__1 = (function (name__10089__auto__){return number_field50834.call(null,name__10089__auto__,null);
});
var number_field50834__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",1620071682,null))),name__10089__auto__,value__10090__auto__);
});
number_field50834 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return number_field50834__1.call(this,name__10089__auto__);
case 2:
return number_field50834__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field50834.cljs$core$IFn$_invoke$arity$1 = number_field50834__1;
number_field50834.cljs$core$IFn$_invoke$arity$2 = number_field50834__2;
return number_field50834;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field50834);
/**
* Creates a password input field.
*/
sablono.core.password_field50835 = (function() {
var password_field50835 = null;
var password_field50835__1 = (function (name__10089__auto__){return password_field50835.call(null,name__10089__auto__,null);
});
var password_field50835__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",-423545772,null))),name__10089__auto__,value__10090__auto__);
});
password_field50835 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return password_field50835__1.call(this,name__10089__auto__);
case 2:
return password_field50835__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field50835.cljs$core$IFn$_invoke$arity$1 = password_field50835__1;
password_field50835.cljs$core$IFn$_invoke$arity$2 = password_field50835__2;
return password_field50835;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field50835);
/**
* Creates a range input field.
*/
sablono.core.range_field50836 = (function() {
var range_field50836 = null;
var range_field50836__1 = (function (name__10089__auto__){return range_field50836.call(null,name__10089__auto__,null);
});
var range_field50836__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1532251402,null))),name__10089__auto__,value__10090__auto__);
});
range_field50836 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return range_field50836__1.call(this,name__10089__auto__);
case 2:
return range_field50836__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field50836.cljs$core$IFn$_invoke$arity$1 = range_field50836__1;
range_field50836.cljs$core$IFn$_invoke$arity$2 = range_field50836__2;
return range_field50836;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field50836);
/**
* Creates a search input field.
*/
sablono.core.search_field50837 = (function() {
var search_field50837 = null;
var search_field50837__1 = (function (name__10089__auto__){return search_field50837.call(null,name__10089__auto__,null);
});
var search_field50837__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",1748098913,null))),name__10089__auto__,value__10090__auto__);
});
search_field50837 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return search_field50837__1.call(this,name__10089__auto__);
case 2:
return search_field50837__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field50837.cljs$core$IFn$_invoke$arity$1 = search_field50837__1;
search_field50837.cljs$core$IFn$_invoke$arity$2 = search_field50837__2;
return search_field50837;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field50837);
/**
* Creates a tel input field.
*/
sablono.core.tel_field50838 = (function() {
var tel_field50838 = null;
var tel_field50838__1 = (function (name__10089__auto__){return tel_field50838.call(null,name__10089__auto__,null);
});
var tel_field50838__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))),name__10089__auto__,value__10090__auto__);
});
tel_field50838 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return tel_field50838__1.call(this,name__10089__auto__);
case 2:
return tel_field50838__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field50838.cljs$core$IFn$_invoke$arity$1 = tel_field50838__1;
tel_field50838.cljs$core$IFn$_invoke$arity$2 = tel_field50838__2;
return tel_field50838;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field50838);
/**
* Creates a text input field.
*/
sablono.core.text_field50839 = (function() {
var text_field50839 = null;
var text_field50839__1 = (function (name__10089__auto__){return text_field50839.call(null,name__10089__auto__,null);
});
var text_field50839__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-1636974874,null))),name__10089__auto__,value__10090__auto__);
});
text_field50839 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return text_field50839__1.call(this,name__10089__auto__);
case 2:
return text_field50839__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field50839.cljs$core$IFn$_invoke$arity$1 = text_field50839__1;
text_field50839.cljs$core$IFn$_invoke$arity$2 = text_field50839__2;
return text_field50839;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field50839);
/**
* Creates a time input field.
*/
sablono.core.time_field50840 = (function() {
var time_field50840 = null;
var time_field50840__1 = (function (name__10089__auto__){return time_field50840.call(null,name__10089__auto__,null);
});
var time_field50840__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1636971386,null))),name__10089__auto__,value__10090__auto__);
});
time_field50840 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return time_field50840__1.call(this,name__10089__auto__);
case 2:
return time_field50840__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field50840.cljs$core$IFn$_invoke$arity$1 = time_field50840__1;
time_field50840.cljs$core$IFn$_invoke$arity$2 = time_field50840__2;
return time_field50840;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field50840);
/**
* Creates a url input field.
*/
sablono.core.url_field50841 = (function() {
var url_field50841 = null;
var url_field50841__1 = (function (name__10089__auto__){return url_field50841.call(null,name__10089__auto__,null);
});
var url_field50841__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",-1640415448,null))),name__10089__auto__,value__10090__auto__);
});
url_field50841 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return url_field50841__1.call(this,name__10089__auto__);
case 2:
return url_field50841__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field50841.cljs$core$IFn$_invoke$arity$1 = url_field50841__1;
url_field50841.cljs$core$IFn$_invoke$arity$2 = url_field50841__2;
return url_field50841;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field50841);
/**
* Creates a week input field.
*/
sablono.core.week_field50842 = (function() {
var week_field50842 = null;
var week_field50842__1 = (function (name__10089__auto__){return week_field50842.call(null,name__10089__auto__,null);
});
var week_field50842__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",-1636886099,null))),name__10089__auto__,value__10090__auto__);
});
week_field50842 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return week_field50842__1.call(this,name__10089__auto__);
case 2:
return week_field50842__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field50842.cljs$core$IFn$_invoke$arity$1 = week_field50842__1;
week_field50842.cljs$core$IFn$_invoke$arity$2 = week_field50842__2;
return week_field50842;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field50842);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box50843 = (function() {
var check_box50843 = null;
var check_box50843__1 = (function (name){return check_box50843.call(null,name,null);
});
var check_box50843__2 = (function (name,checked_QMARK_){return check_box50843.call(null,name,checked_QMARK_,"true");
});
var check_box50843__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box50843 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box50843__1.call(this,name);
case 2:
return check_box50843__2.call(this,name,checked_QMARK_);
case 3:
return check_box50843__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box50843.cljs$core$IFn$_invoke$arity$1 = check_box50843__1;
check_box50843.cljs$core$IFn$_invoke$arity$2 = check_box50843__2;
check_box50843.cljs$core$IFn$_invoke$arity$3 = check_box50843__3;
return check_box50843;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box50843);
/**
* Creates a radio button.
*/
sablono.core.radio_button50844 = (function() {
var radio_button50844 = null;
var radio_button50844__1 = (function (group){return radio_button50844.call(null,group,null);
});
var radio_button50844__2 = (function (group,checked_QMARK_){return radio_button50844.call(null,group,checked_QMARK_,"true");
});
var radio_button50844__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button50844 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button50844__1.call(this,group);
case 2:
return radio_button50844__2.call(this,group,checked_QMARK_);
case 3:
return radio_button50844__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button50844.cljs$core$IFn$_invoke$arity$1 = radio_button50844__1;
radio_button50844.cljs$core$IFn$_invoke$arity$2 = radio_button50844__2;
radio_button50844.cljs$core$IFn$_invoke$arity$3 = radio_button50844__3;
return radio_button50844;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button50844);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options50845 = (function() {
var select_options50845 = null;
var select_options50845__1 = (function (coll){return select_options50845.call(null,coll,null);
});
var select_options50845__2 = (function (coll,selected){var iter__4264__auto__ = (function iter__50854(s__50855){return (new cljs.core.LazySeq(null,(function (){var s__50855__$1 = s__50855;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__50855__$1);if(temp__4126__auto__)
{var s__50855__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50855__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__50855__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__50857 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__50856 = 0;while(true){
if((i__50856 < size__4263__auto__))
{var x = cljs.core._nth.call(null,c__4262__auto__,i__50856);cljs.core.chunk_append.call(null,b__50857,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__50860 = x;var text = cljs.core.nth.call(null,vec__50860,0,null);var val = cljs.core.nth.call(null,vec__50860,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__50860,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options50845.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__50862 = (i__50856 + 1);
i__50856 = G__50862;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50857),iter__50854.call(null,cljs.core.chunk_rest.call(null,s__50855__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50857),null);
}
} else
{var x = cljs.core.first.call(null,s__50855__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__50861 = x;var text = cljs.core.nth.call(null,vec__50861,0,null);var val = cljs.core.nth.call(null,vec__50861,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__50861,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options50845.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__50854.call(null,cljs.core.rest.call(null,s__50855__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,coll);
});
select_options50845 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options50845__1.call(this,coll);
case 2:
return select_options50845__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options50845.cljs$core$IFn$_invoke$arity$1 = select_options50845__1;
select_options50845.cljs$core$IFn$_invoke$arity$2 = select_options50845__2;
return select_options50845;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options50845);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down50863 = (function() {
var drop_down50863 = null;
var drop_down50863__2 = (function (name,options){return drop_down50863.call(null,name,options,null);
});
var drop_down50863__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down50863 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down50863__2.call(this,name,options);
case 3:
return drop_down50863__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down50863.cljs$core$IFn$_invoke$arity$2 = drop_down50863__2;
drop_down50863.cljs$core$IFn$_invoke$arity$3 = drop_down50863__3;
return drop_down50863;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down50863);
/**
* Creates a text area element.
*/
sablono.core.text_area50864 = (function() {
var text_area50864 = null;
var text_area50864__1 = (function (name){return text_area50864.call(null,name,null);
});
var text_area50864__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area50864 = function(name,value){
switch(arguments.length){
case 1:
return text_area50864__1.call(this,name);
case 2:
return text_area50864__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area50864.cljs$core$IFn$_invoke$arity$1 = text_area50864__1;
text_area50864.cljs$core$IFn$_invoke$arity$2 = text_area50864__2;
return text_area50864;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area50864);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label50865 = (function label50865(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label50865);
/**
* Creates a submit button.
*/
sablono.core.submit_button50866 = (function submit_button50866(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button50866);
/**
* Creates a form reset button.
*/
sablono.core.reset_button50867 = (function reset_button50867(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button50867);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to50868 = (function() { 
var form_to50868__delegate = function (p__50869,body){var vec__50871 = p__50869;var method = cljs.core.nth.call(null,vec__50871,0,null);var action = cljs.core.nth.call(null,vec__50871,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to50868 = function (p__50869,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to50868__delegate.call(this,p__50869,body);};
form_to50868.cljs$lang$maxFixedArity = 1;
form_to50868.cljs$lang$applyTo = (function (arglist__50872){
var p__50869 = cljs.core.first(arglist__50872);
var body = cljs.core.rest(arglist__50872);
return form_to50868__delegate(p__50869,body);
});
form_to50868.cljs$core$IFn$_invoke$arity$variadic = form_to50868__delegate;
return form_to50868;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to50868);
