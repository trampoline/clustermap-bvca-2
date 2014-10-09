// Compiled by ClojureScript 0.0-2322
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_20004 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_20005 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_20006 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_20006,opt_wrapper_20004,table_section_wrapper_20005,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_20004,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_20005,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_20005,cell_wrapper_20006,table_section_wrapper_20005,table_section_wrapper_20005]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__20011 = cljs.core.seq.call(null,tbody);var chunk__20012 = null;var count__20013 = (0);var i__20014 = (0);while(true){
if((i__20014 < count__20013))
{var child = cljs.core._nth.call(null,chunk__20012,i__20014);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20015 = seq__20011;
var G__20016 = chunk__20012;
var G__20017 = count__20013;
var G__20018 = (i__20014 + (1));
seq__20011 = G__20015;
chunk__20012 = G__20016;
count__20013 = G__20017;
i__20014 = G__20018;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20011);if(temp__4126__auto__)
{var seq__20011__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20011__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__20011__$1);{
var G__20019 = cljs.core.chunk_rest.call(null,seq__20011__$1);
var G__20020 = c__4314__auto__;
var G__20021 = cljs.core.count.call(null,c__4314__auto__);
var G__20022 = (0);
seq__20011 = G__20019;
chunk__20012 = G__20020;
count__20013 = G__20021;
i__20014 = G__20022;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__20011__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20023 = cljs.core.next.call(null,seq__20011__$1);
var G__20024 = null;
var G__20025 = (0);
var G__20026 = (0);
seq__20011 = G__20023;
chunk__20012 = G__20024;
count__20013 = G__20025;
i__20014 = G__20026;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__20028 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__20028,(0),null);var start_wrap = cljs.core.nth.call(null,vec__20028,(1),null);var end_wrap = cljs.core.nth.call(null,vec__20028,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__20029 = wrapper.lastChild;
var G__20030 = (level - (1));
wrapper = G__20029;
level = G__20030;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj20032 = {};return obj20032;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__20033){
var mesg = cljs.core.seq(arglist__20033);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__20034){
var mesg = cljs.core.seq(arglist__20034);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__20035){
var contents = cljs.core.seq(arglist__20035);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__20036_SHARP_){return p1__20036_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__20037_SHARP_,p2__20038_SHARP_){return goog.dom.insertChildAt(p1__20037_SHARP_,p2__20038_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20040_SHARP_,p2__20039_SHARP_){return goog.dom.insertSiblingBefore(p2__20039_SHARP_,p1__20040_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20042_SHARP_,p2__20041_SHARP_){return goog.dom.insertSiblingAfter(p2__20041_SHARP_,p1__20042_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__20044_SHARP_,p2__20043_SHARP_){return goog.dom.replaceNode(p2__20043_SHARP_,p1__20044_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__20049_20053 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20050_20054 = null;var count__20051_20055 = (0);var i__20052_20056 = (0);while(true){
if((i__20052_20056 < count__20051_20055))
{var n_20057 = cljs.core._nth.call(null,chunk__20050_20054,i__20052_20056);goog.style.setStyle(n_20057,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20058 = seq__20049_20053;
var G__20059 = chunk__20050_20054;
var G__20060 = count__20051_20055;
var G__20061 = (i__20052_20056 + (1));
seq__20049_20053 = G__20058;
chunk__20050_20054 = G__20059;
count__20051_20055 = G__20060;
i__20052_20056 = G__20061;
continue;
}
} else
{var temp__4126__auto___20062 = cljs.core.seq.call(null,seq__20049_20053);if(temp__4126__auto___20062)
{var seq__20049_20063__$1 = temp__4126__auto___20062;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20049_20063__$1))
{var c__4314__auto___20064 = cljs.core.chunk_first.call(null,seq__20049_20063__$1);{
var G__20065 = cljs.core.chunk_rest.call(null,seq__20049_20063__$1);
var G__20066 = c__4314__auto___20064;
var G__20067 = cljs.core.count.call(null,c__4314__auto___20064);
var G__20068 = (0);
seq__20049_20053 = G__20065;
chunk__20050_20054 = G__20066;
count__20051_20055 = G__20067;
i__20052_20056 = G__20068;
continue;
}
} else
{var n_20069 = cljs.core.first.call(null,seq__20049_20063__$1);goog.style.setStyle(n_20069,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20070 = cljs.core.next.call(null,seq__20049_20063__$1);
var G__20071 = null;
var G__20072 = (0);
var G__20073 = (0);
seq__20049_20053 = G__20070;
chunk__20050_20054 = G__20071;
count__20051_20055 = G__20072;
i__20052_20056 = G__20073;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20074){
var content = cljs.core.first(arglist__20074);
arglist__20074 = cljs.core.next(arglist__20074);
var name = cljs.core.first(arglist__20074);
var value = cljs.core.rest(arglist__20074);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__20079_20083 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20080_20084 = null;var count__20081_20085 = (0);var i__20082_20086 = (0);while(true){
if((i__20082_20086 < count__20081_20085))
{var n_20087 = cljs.core._nth.call(null,chunk__20080_20084,i__20082_20086);n_20087.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20088 = seq__20079_20083;
var G__20089 = chunk__20080_20084;
var G__20090 = count__20081_20085;
var G__20091 = (i__20082_20086 + (1));
seq__20079_20083 = G__20088;
chunk__20080_20084 = G__20089;
count__20081_20085 = G__20090;
i__20082_20086 = G__20091;
continue;
}
} else
{var temp__4126__auto___20092 = cljs.core.seq.call(null,seq__20079_20083);if(temp__4126__auto___20092)
{var seq__20079_20093__$1 = temp__4126__auto___20092;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20079_20093__$1))
{var c__4314__auto___20094 = cljs.core.chunk_first.call(null,seq__20079_20093__$1);{
var G__20095 = cljs.core.chunk_rest.call(null,seq__20079_20093__$1);
var G__20096 = c__4314__auto___20094;
var G__20097 = cljs.core.count.call(null,c__4314__auto___20094);
var G__20098 = (0);
seq__20079_20083 = G__20095;
chunk__20080_20084 = G__20096;
count__20081_20085 = G__20097;
i__20082_20086 = G__20098;
continue;
}
} else
{var n_20099 = cljs.core.first.call(null,seq__20079_20093__$1);n_20099.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20100 = cljs.core.next.call(null,seq__20079_20093__$1);
var G__20101 = null;
var G__20102 = (0);
var G__20103 = (0);
seq__20079_20083 = G__20100;
chunk__20080_20084 = G__20101;
count__20081_20085 = G__20102;
i__20082_20086 = G__20103;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__20104){
var content = cljs.core.first(arglist__20104);
arglist__20104 = cljs.core.next(arglist__20104);
var name = cljs.core.first(arglist__20104);
var value = cljs.core.rest(arglist__20104);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__20109_20113 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20110_20114 = null;var count__20111_20115 = (0);var i__20112_20116 = (0);while(true){
if((i__20112_20116 < count__20111_20115))
{var n_20117 = cljs.core._nth.call(null,chunk__20110_20114,i__20112_20116);n_20117.removeAttribute(cljs.core.name.call(null,name));
{
var G__20118 = seq__20109_20113;
var G__20119 = chunk__20110_20114;
var G__20120 = count__20111_20115;
var G__20121 = (i__20112_20116 + (1));
seq__20109_20113 = G__20118;
chunk__20110_20114 = G__20119;
count__20111_20115 = G__20120;
i__20112_20116 = G__20121;
continue;
}
} else
{var temp__4126__auto___20122 = cljs.core.seq.call(null,seq__20109_20113);if(temp__4126__auto___20122)
{var seq__20109_20123__$1 = temp__4126__auto___20122;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20109_20123__$1))
{var c__4314__auto___20124 = cljs.core.chunk_first.call(null,seq__20109_20123__$1);{
var G__20125 = cljs.core.chunk_rest.call(null,seq__20109_20123__$1);
var G__20126 = c__4314__auto___20124;
var G__20127 = cljs.core.count.call(null,c__4314__auto___20124);
var G__20128 = (0);
seq__20109_20113 = G__20125;
chunk__20110_20114 = G__20126;
count__20111_20115 = G__20127;
i__20112_20116 = G__20128;
continue;
}
} else
{var n_20129 = cljs.core.first.call(null,seq__20109_20123__$1);n_20129.removeAttribute(cljs.core.name.call(null,name));
{
var G__20130 = cljs.core.next.call(null,seq__20109_20123__$1);
var G__20131 = null;
var G__20132 = (0);
var G__20133 = (0);
seq__20109_20113 = G__20130;
chunk__20110_20114 = G__20131;
count__20111_20115 = G__20132;
i__20112_20116 = G__20133;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__20135 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__20135,(0),null);var v = cljs.core.nth.call(null,vec__20135,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__20136_SHARP_){var attr = attrs__$1.item(p1__20136_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__20143_20149 = cljs.core.seq.call(null,styles);var chunk__20144_20150 = null;var count__20145_20151 = (0);var i__20146_20152 = (0);while(true){
if((i__20146_20152 < count__20145_20151))
{var vec__20147_20153 = cljs.core._nth.call(null,chunk__20144_20150,i__20146_20152);var name_20154 = cljs.core.nth.call(null,vec__20147_20153,(0),null);var value_20155 = cljs.core.nth.call(null,vec__20147_20153,(1),null);domina.set_style_BANG_.call(null,content,name_20154,value_20155);
{
var G__20156 = seq__20143_20149;
var G__20157 = chunk__20144_20150;
var G__20158 = count__20145_20151;
var G__20159 = (i__20146_20152 + (1));
seq__20143_20149 = G__20156;
chunk__20144_20150 = G__20157;
count__20145_20151 = G__20158;
i__20146_20152 = G__20159;
continue;
}
} else
{var temp__4126__auto___20160 = cljs.core.seq.call(null,seq__20143_20149);if(temp__4126__auto___20160)
{var seq__20143_20161__$1 = temp__4126__auto___20160;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20143_20161__$1))
{var c__4314__auto___20162 = cljs.core.chunk_first.call(null,seq__20143_20161__$1);{
var G__20163 = cljs.core.chunk_rest.call(null,seq__20143_20161__$1);
var G__20164 = c__4314__auto___20162;
var G__20165 = cljs.core.count.call(null,c__4314__auto___20162);
var G__20166 = (0);
seq__20143_20149 = G__20163;
chunk__20144_20150 = G__20164;
count__20145_20151 = G__20165;
i__20146_20152 = G__20166;
continue;
}
} else
{var vec__20148_20167 = cljs.core.first.call(null,seq__20143_20161__$1);var name_20168 = cljs.core.nth.call(null,vec__20148_20167,(0),null);var value_20169 = cljs.core.nth.call(null,vec__20148_20167,(1),null);domina.set_style_BANG_.call(null,content,name_20168,value_20169);
{
var G__20170 = cljs.core.next.call(null,seq__20143_20161__$1);
var G__20171 = null;
var G__20172 = (0);
var G__20173 = (0);
seq__20143_20149 = G__20170;
chunk__20144_20150 = G__20171;
count__20145_20151 = G__20172;
i__20146_20152 = G__20173;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__20180_20186 = cljs.core.seq.call(null,attrs);var chunk__20181_20187 = null;var count__20182_20188 = (0);var i__20183_20189 = (0);while(true){
if((i__20183_20189 < count__20182_20188))
{var vec__20184_20190 = cljs.core._nth.call(null,chunk__20181_20187,i__20183_20189);var name_20191 = cljs.core.nth.call(null,vec__20184_20190,(0),null);var value_20192 = cljs.core.nth.call(null,vec__20184_20190,(1),null);domina.set_attr_BANG_.call(null,content,name_20191,value_20192);
{
var G__20193 = seq__20180_20186;
var G__20194 = chunk__20181_20187;
var G__20195 = count__20182_20188;
var G__20196 = (i__20183_20189 + (1));
seq__20180_20186 = G__20193;
chunk__20181_20187 = G__20194;
count__20182_20188 = G__20195;
i__20183_20189 = G__20196;
continue;
}
} else
{var temp__4126__auto___20197 = cljs.core.seq.call(null,seq__20180_20186);if(temp__4126__auto___20197)
{var seq__20180_20198__$1 = temp__4126__auto___20197;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20180_20198__$1))
{var c__4314__auto___20199 = cljs.core.chunk_first.call(null,seq__20180_20198__$1);{
var G__20200 = cljs.core.chunk_rest.call(null,seq__20180_20198__$1);
var G__20201 = c__4314__auto___20199;
var G__20202 = cljs.core.count.call(null,c__4314__auto___20199);
var G__20203 = (0);
seq__20180_20186 = G__20200;
chunk__20181_20187 = G__20201;
count__20182_20188 = G__20202;
i__20183_20189 = G__20203;
continue;
}
} else
{var vec__20185_20204 = cljs.core.first.call(null,seq__20180_20198__$1);var name_20205 = cljs.core.nth.call(null,vec__20185_20204,(0),null);var value_20206 = cljs.core.nth.call(null,vec__20185_20204,(1),null);domina.set_attr_BANG_.call(null,content,name_20205,value_20206);
{
var G__20207 = cljs.core.next.call(null,seq__20180_20198__$1);
var G__20208 = null;
var G__20209 = (0);
var G__20210 = (0);
seq__20180_20186 = G__20207;
chunk__20181_20187 = G__20208;
count__20182_20188 = G__20209;
i__20183_20189 = G__20210;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__20215_20219 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20216_20220 = null;var count__20217_20221 = (0);var i__20218_20222 = (0);while(true){
if((i__20218_20222 < count__20217_20221))
{var node_20223 = cljs.core._nth.call(null,chunk__20216_20220,i__20218_20222);goog.dom.classes.add(node_20223,class$);
{
var G__20224 = seq__20215_20219;
var G__20225 = chunk__20216_20220;
var G__20226 = count__20217_20221;
var G__20227 = (i__20218_20222 + (1));
seq__20215_20219 = G__20224;
chunk__20216_20220 = G__20225;
count__20217_20221 = G__20226;
i__20218_20222 = G__20227;
continue;
}
} else
{var temp__4126__auto___20228 = cljs.core.seq.call(null,seq__20215_20219);if(temp__4126__auto___20228)
{var seq__20215_20229__$1 = temp__4126__auto___20228;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20215_20229__$1))
{var c__4314__auto___20230 = cljs.core.chunk_first.call(null,seq__20215_20229__$1);{
var G__20231 = cljs.core.chunk_rest.call(null,seq__20215_20229__$1);
var G__20232 = c__4314__auto___20230;
var G__20233 = cljs.core.count.call(null,c__4314__auto___20230);
var G__20234 = (0);
seq__20215_20219 = G__20231;
chunk__20216_20220 = G__20232;
count__20217_20221 = G__20233;
i__20218_20222 = G__20234;
continue;
}
} else
{var node_20235 = cljs.core.first.call(null,seq__20215_20229__$1);goog.dom.classes.add(node_20235,class$);
{
var G__20236 = cljs.core.next.call(null,seq__20215_20229__$1);
var G__20237 = null;
var G__20238 = (0);
var G__20239 = (0);
seq__20215_20219 = G__20236;
chunk__20216_20220 = G__20237;
count__20217_20221 = G__20238;
i__20218_20222 = G__20239;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__20244_20248 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20245_20249 = null;var count__20246_20250 = (0);var i__20247_20251 = (0);while(true){
if((i__20247_20251 < count__20246_20250))
{var node_20252 = cljs.core._nth.call(null,chunk__20245_20249,i__20247_20251);goog.dom.classes.remove(node_20252,class$);
{
var G__20253 = seq__20244_20248;
var G__20254 = chunk__20245_20249;
var G__20255 = count__20246_20250;
var G__20256 = (i__20247_20251 + (1));
seq__20244_20248 = G__20253;
chunk__20245_20249 = G__20254;
count__20246_20250 = G__20255;
i__20247_20251 = G__20256;
continue;
}
} else
{var temp__4126__auto___20257 = cljs.core.seq.call(null,seq__20244_20248);if(temp__4126__auto___20257)
{var seq__20244_20258__$1 = temp__4126__auto___20257;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20244_20258__$1))
{var c__4314__auto___20259 = cljs.core.chunk_first.call(null,seq__20244_20258__$1);{
var G__20260 = cljs.core.chunk_rest.call(null,seq__20244_20258__$1);
var G__20261 = c__4314__auto___20259;
var G__20262 = cljs.core.count.call(null,c__4314__auto___20259);
var G__20263 = (0);
seq__20244_20248 = G__20260;
chunk__20245_20249 = G__20261;
count__20246_20250 = G__20262;
i__20247_20251 = G__20263;
continue;
}
} else
{var node_20264 = cljs.core.first.call(null,seq__20244_20258__$1);goog.dom.classes.remove(node_20264,class$);
{
var G__20265 = cljs.core.next.call(null,seq__20244_20258__$1);
var G__20266 = null;
var G__20267 = (0);
var G__20268 = (0);
seq__20244_20248 = G__20265;
chunk__20245_20249 = G__20266;
count__20246_20250 = G__20267;
i__20247_20251 = G__20268;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__20273_20277 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20274_20278 = null;var count__20275_20279 = (0);var i__20276_20280 = (0);while(true){
if((i__20276_20280 < count__20275_20279))
{var node_20281 = cljs.core._nth.call(null,chunk__20274_20278,i__20276_20280);goog.dom.classes.toggle(node_20281,class$);
{
var G__20282 = seq__20273_20277;
var G__20283 = chunk__20274_20278;
var G__20284 = count__20275_20279;
var G__20285 = (i__20276_20280 + (1));
seq__20273_20277 = G__20282;
chunk__20274_20278 = G__20283;
count__20275_20279 = G__20284;
i__20276_20280 = G__20285;
continue;
}
} else
{var temp__4126__auto___20286 = cljs.core.seq.call(null,seq__20273_20277);if(temp__4126__auto___20286)
{var seq__20273_20287__$1 = temp__4126__auto___20286;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20273_20287__$1))
{var c__4314__auto___20288 = cljs.core.chunk_first.call(null,seq__20273_20287__$1);{
var G__20289 = cljs.core.chunk_rest.call(null,seq__20273_20287__$1);
var G__20290 = c__4314__auto___20288;
var G__20291 = cljs.core.count.call(null,c__4314__auto___20288);
var G__20292 = (0);
seq__20273_20277 = G__20289;
chunk__20274_20278 = G__20290;
count__20275_20279 = G__20291;
i__20276_20280 = G__20292;
continue;
}
} else
{var node_20293 = cljs.core.first.call(null,seq__20273_20287__$1);goog.dom.classes.toggle(node_20293,class$);
{
var G__20294 = cljs.core.next.call(null,seq__20273_20287__$1);
var G__20295 = null;
var G__20296 = (0);
var G__20297 = (0);
seq__20273_20277 = G__20294;
chunk__20274_20278 = G__20295;
count__20275_20279 = G__20296;
i__20276_20280 = G__20297;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_20306__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__20302_20307 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20303_20308 = null;var count__20304_20309 = (0);var i__20305_20310 = (0);while(true){
if((i__20305_20310 < count__20304_20309))
{var node_20311 = cljs.core._nth.call(null,chunk__20303_20308,i__20305_20310);goog.dom.classes.set(node_20311,classes_20306__$1);
{
var G__20312 = seq__20302_20307;
var G__20313 = chunk__20303_20308;
var G__20314 = count__20304_20309;
var G__20315 = (i__20305_20310 + (1));
seq__20302_20307 = G__20312;
chunk__20303_20308 = G__20313;
count__20304_20309 = G__20314;
i__20305_20310 = G__20315;
continue;
}
} else
{var temp__4126__auto___20316 = cljs.core.seq.call(null,seq__20302_20307);if(temp__4126__auto___20316)
{var seq__20302_20317__$1 = temp__4126__auto___20316;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20302_20317__$1))
{var c__4314__auto___20318 = cljs.core.chunk_first.call(null,seq__20302_20317__$1);{
var G__20319 = cljs.core.chunk_rest.call(null,seq__20302_20317__$1);
var G__20320 = c__4314__auto___20318;
var G__20321 = cljs.core.count.call(null,c__4314__auto___20318);
var G__20322 = (0);
seq__20302_20307 = G__20319;
chunk__20303_20308 = G__20320;
count__20304_20309 = G__20321;
i__20305_20310 = G__20322;
continue;
}
} else
{var node_20323 = cljs.core.first.call(null,seq__20302_20317__$1);goog.dom.classes.set(node_20323,classes_20306__$1);
{
var G__20324 = cljs.core.next.call(null,seq__20302_20317__$1);
var G__20325 = null;
var G__20326 = (0);
var G__20327 = (0);
seq__20302_20307 = G__20324;
chunk__20303_20308 = G__20325;
count__20304_20309 = G__20326;
i__20305_20310 = G__20327;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__20332_20336 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20333_20337 = null;var count__20334_20338 = (0);var i__20335_20339 = (0);while(true){
if((i__20335_20339 < count__20334_20338))
{var node_20340 = cljs.core._nth.call(null,chunk__20333_20337,i__20335_20339);goog.dom.setTextContent(node_20340,value);
{
var G__20341 = seq__20332_20336;
var G__20342 = chunk__20333_20337;
var G__20343 = count__20334_20338;
var G__20344 = (i__20335_20339 + (1));
seq__20332_20336 = G__20341;
chunk__20333_20337 = G__20342;
count__20334_20338 = G__20343;
i__20335_20339 = G__20344;
continue;
}
} else
{var temp__4126__auto___20345 = cljs.core.seq.call(null,seq__20332_20336);if(temp__4126__auto___20345)
{var seq__20332_20346__$1 = temp__4126__auto___20345;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20332_20346__$1))
{var c__4314__auto___20347 = cljs.core.chunk_first.call(null,seq__20332_20346__$1);{
var G__20348 = cljs.core.chunk_rest.call(null,seq__20332_20346__$1);
var G__20349 = c__4314__auto___20347;
var G__20350 = cljs.core.count.call(null,c__4314__auto___20347);
var G__20351 = (0);
seq__20332_20336 = G__20348;
chunk__20333_20337 = G__20349;
count__20334_20338 = G__20350;
i__20335_20339 = G__20351;
continue;
}
} else
{var node_20352 = cljs.core.first.call(null,seq__20332_20346__$1);goog.dom.setTextContent(node_20352,value);
{
var G__20353 = cljs.core.next.call(null,seq__20332_20346__$1);
var G__20354 = null;
var G__20355 = (0);
var G__20356 = (0);
seq__20332_20336 = G__20353;
chunk__20333_20337 = G__20354;
count__20334_20338 = G__20355;
i__20335_20339 = G__20356;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__20361_20365 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20362_20366 = null;var count__20363_20367 = (0);var i__20364_20368 = (0);while(true){
if((i__20364_20368 < count__20363_20367))
{var node_20369 = cljs.core._nth.call(null,chunk__20362_20366,i__20364_20368);goog.dom.forms.setValue(node_20369,value);
{
var G__20370 = seq__20361_20365;
var G__20371 = chunk__20362_20366;
var G__20372 = count__20363_20367;
var G__20373 = (i__20364_20368 + (1));
seq__20361_20365 = G__20370;
chunk__20362_20366 = G__20371;
count__20363_20367 = G__20372;
i__20364_20368 = G__20373;
continue;
}
} else
{var temp__4126__auto___20374 = cljs.core.seq.call(null,seq__20361_20365);if(temp__4126__auto___20374)
{var seq__20361_20375__$1 = temp__4126__auto___20374;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20361_20375__$1))
{var c__4314__auto___20376 = cljs.core.chunk_first.call(null,seq__20361_20375__$1);{
var G__20377 = cljs.core.chunk_rest.call(null,seq__20361_20375__$1);
var G__20378 = c__4314__auto___20376;
var G__20379 = cljs.core.count.call(null,c__4314__auto___20376);
var G__20380 = (0);
seq__20361_20365 = G__20377;
chunk__20362_20366 = G__20378;
count__20363_20367 = G__20379;
i__20364_20368 = G__20380;
continue;
}
} else
{var node_20381 = cljs.core.first.call(null,seq__20361_20375__$1);goog.dom.forms.setValue(node_20381,value);
{
var G__20382 = cljs.core.next.call(null,seq__20361_20375__$1);
var G__20383 = null;
var G__20384 = (0);
var G__20385 = (0);
seq__20361_20365 = G__20382;
chunk__20362_20366 = G__20383;
count__20363_20367 = G__20384;
i__20364_20368 = G__20385;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_20396 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__20392_20397 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20393_20398 = null;var count__20394_20399 = (0);var i__20395_20400 = (0);while(true){
if((i__20395_20400 < count__20394_20399))
{var node_20401 = cljs.core._nth.call(null,chunk__20393_20398,i__20395_20400);node_20401.innerHTML = value_20396;
{
var G__20402 = seq__20392_20397;
var G__20403 = chunk__20393_20398;
var G__20404 = count__20394_20399;
var G__20405 = (i__20395_20400 + (1));
seq__20392_20397 = G__20402;
chunk__20393_20398 = G__20403;
count__20394_20399 = G__20404;
i__20395_20400 = G__20405;
continue;
}
} else
{var temp__4126__auto___20406 = cljs.core.seq.call(null,seq__20392_20397);if(temp__4126__auto___20406)
{var seq__20392_20407__$1 = temp__4126__auto___20406;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20392_20407__$1))
{var c__4314__auto___20408 = cljs.core.chunk_first.call(null,seq__20392_20407__$1);{
var G__20409 = cljs.core.chunk_rest.call(null,seq__20392_20407__$1);
var G__20410 = c__4314__auto___20408;
var G__20411 = cljs.core.count.call(null,c__4314__auto___20408);
var G__20412 = (0);
seq__20392_20397 = G__20409;
chunk__20393_20398 = G__20410;
count__20394_20399 = G__20411;
i__20395_20400 = G__20412;
continue;
}
} else
{var node_20413 = cljs.core.first.call(null,seq__20392_20407__$1);node_20413.innerHTML = value_20396;
{
var G__20414 = cljs.core.next.call(null,seq__20392_20407__$1);
var G__20415 = null;
var G__20416 = (0);
var G__20417 = (0);
seq__20392_20397 = G__20414;
chunk__20393_20398 = G__20415;
count__20394_20399 = G__20416;
i__20395_20400 = G__20417;
continue;
}
}
} else
{}
}
break;
}
}catch (e20391){if((e20391 instanceof Error))
{var e_20418 = e20391;domina.replace_children_BANG_.call(null,content,value_20396);
} else
{throw e20391;

}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__20425_20429 = cljs.core.seq.call(null,children);var chunk__20426_20430 = null;var count__20427_20431 = (0);var i__20428_20432 = (0);while(true){
if((i__20428_20432 < count__20427_20431))
{var child_20433 = cljs.core._nth.call(null,chunk__20426_20430,i__20428_20432);frag.appendChild(child_20433);
{
var G__20434 = seq__20425_20429;
var G__20435 = chunk__20426_20430;
var G__20436 = count__20427_20431;
var G__20437 = (i__20428_20432 + (1));
seq__20425_20429 = G__20434;
chunk__20426_20430 = G__20435;
count__20427_20431 = G__20436;
i__20428_20432 = G__20437;
continue;
}
} else
{var temp__4126__auto___20438 = cljs.core.seq.call(null,seq__20425_20429);if(temp__4126__auto___20438)
{var seq__20425_20439__$1 = temp__4126__auto___20438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20425_20439__$1))
{var c__4314__auto___20440 = cljs.core.chunk_first.call(null,seq__20425_20439__$1);{
var G__20441 = cljs.core.chunk_rest.call(null,seq__20425_20439__$1);
var G__20442 = c__4314__auto___20440;
var G__20443 = cljs.core.count.call(null,c__4314__auto___20440);
var G__20444 = (0);
seq__20425_20429 = G__20441;
chunk__20426_20430 = G__20442;
count__20427_20431 = G__20443;
i__20428_20432 = G__20444;
continue;
}
} else
{var child_20445 = cljs.core.first.call(null,seq__20425_20439__$1);frag.appendChild(child_20445);
{
var G__20446 = cljs.core.next.call(null,seq__20425_20439__$1);
var G__20447 = null;
var G__20448 = (0);
var G__20449 = (0);
seq__20425_20429 = G__20446;
chunk__20426_20430 = G__20447;
count__20427_20431 = G__20448;
i__20428_20432 = G__20449;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__20419_SHARP_,p2__20420_SHARP_){return f.call(null,p1__20419_SHARP_,p2__20420_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__20451 = list_thing;if(G__20451)
{var bit__4208__auto__ = (G__20451.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__20451.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20451.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20451);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20451);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__20452 = content;if(G__20452)
{var bit__4208__auto__ = (G__20452.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__20452.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20452.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20452);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20452);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__20453 = content;if(G__20453)
{var bit__4208__auto__ = (G__20453.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__20453.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20453.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20453);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20453);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
