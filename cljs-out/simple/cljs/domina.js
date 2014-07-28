// Compiled by ClojureScript 0.0-2268
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
var opt_wrapper_31998 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_31999 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_32000 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_32000,opt_wrapper_31998,table_section_wrapper_31999,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_31998,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_31999,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_31999,cell_wrapper_32000,table_section_wrapper_31999,table_section_wrapper_31999]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__32005 = cljs.core.seq.call(null,tbody);var chunk__32006 = null;var count__32007 = (0);var i__32008 = (0);while(true){
if((i__32008 < count__32007))
{var child = cljs.core._nth.call(null,chunk__32006,i__32008);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__32009 = seq__32005;
var G__32010 = chunk__32006;
var G__32011 = count__32007;
var G__32012 = (i__32008 + (1));
seq__32005 = G__32009;
chunk__32006 = G__32010;
count__32007 = G__32011;
i__32008 = G__32012;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32005);if(temp__4126__auto__)
{var seq__32005__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32005__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__32005__$1);{
var G__32013 = cljs.core.chunk_rest.call(null,seq__32005__$1);
var G__32014 = c__4299__auto__;
var G__32015 = cljs.core.count.call(null,c__4299__auto__);
var G__32016 = (0);
seq__32005 = G__32013;
chunk__32006 = G__32014;
count__32007 = G__32015;
i__32008 = G__32016;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__32005__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__32017 = cljs.core.next.call(null,seq__32005__$1);
var G__32018 = null;
var G__32019 = (0);
var G__32020 = (0);
seq__32005 = G__32017;
chunk__32006 = G__32018;
count__32007 = G__32019;
i__32008 = G__32020;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__32022 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__32022,(0),null);var start_wrap = cljs.core.nth.call(null,vec__32022,(1),null);var end_wrap = cljs.core.nth.call(null,vec__32022,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__32023 = wrapper.lastChild;
var G__32024 = (level - (1));
wrapper = G__32023;
level = G__32024;
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
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
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
domina.DomContent = (function (){var obj32026 = {};return obj32026;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3531__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__32027){
var mesg = cljs.core.seq(arglist__32027);
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
log.cljs$lang$applyTo = (function (arglist__32028){
var mesg = cljs.core.seq(arglist__32028);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__32029){
var contents = cljs.core.seq(arglist__32029);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__32030_SHARP_){return p1__32030_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__32031_SHARP_,p2__32032_SHARP_){return goog.dom.insertChildAt(p1__32031_SHARP_,p2__32032_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__32034_SHARP_,p2__32033_SHARP_){return goog.dom.insertSiblingBefore(p2__32033_SHARP_,p1__32034_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__32036_SHARP_,p2__32035_SHARP_){return goog.dom.insertSiblingAfter(p2__32035_SHARP_,p1__32036_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__32038_SHARP_,p2__32037_SHARP_){return goog.dom.replaceNode(p2__32037_SHARP_,p1__32038_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__32043_32047 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32044_32048 = null;var count__32045_32049 = (0);var i__32046_32050 = (0);while(true){
if((i__32046_32050 < count__32045_32049))
{var n_32051 = cljs.core._nth.call(null,chunk__32044_32048,i__32046_32050);goog.style.setStyle(n_32051,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32052 = seq__32043_32047;
var G__32053 = chunk__32044_32048;
var G__32054 = count__32045_32049;
var G__32055 = (i__32046_32050 + (1));
seq__32043_32047 = G__32052;
chunk__32044_32048 = G__32053;
count__32045_32049 = G__32054;
i__32046_32050 = G__32055;
continue;
}
} else
{var temp__4126__auto___32056 = cljs.core.seq.call(null,seq__32043_32047);if(temp__4126__auto___32056)
{var seq__32043_32057__$1 = temp__4126__auto___32056;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32043_32057__$1))
{var c__4299__auto___32058 = cljs.core.chunk_first.call(null,seq__32043_32057__$1);{
var G__32059 = cljs.core.chunk_rest.call(null,seq__32043_32057__$1);
var G__32060 = c__4299__auto___32058;
var G__32061 = cljs.core.count.call(null,c__4299__auto___32058);
var G__32062 = (0);
seq__32043_32047 = G__32059;
chunk__32044_32048 = G__32060;
count__32045_32049 = G__32061;
i__32046_32050 = G__32062;
continue;
}
} else
{var n_32063 = cljs.core.first.call(null,seq__32043_32057__$1);goog.style.setStyle(n_32063,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32064 = cljs.core.next.call(null,seq__32043_32057__$1);
var G__32065 = null;
var G__32066 = (0);
var G__32067 = (0);
seq__32043_32047 = G__32064;
chunk__32044_32048 = G__32065;
count__32045_32049 = G__32066;
i__32046_32050 = G__32067;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__32068){
var content = cljs.core.first(arglist__32068);
arglist__32068 = cljs.core.next(arglist__32068);
var name = cljs.core.first(arglist__32068);
var value = cljs.core.rest(arglist__32068);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__32073_32077 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32074_32078 = null;var count__32075_32079 = (0);var i__32076_32080 = (0);while(true){
if((i__32076_32080 < count__32075_32079))
{var n_32081 = cljs.core._nth.call(null,chunk__32074_32078,i__32076_32080);n_32081.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32082 = seq__32073_32077;
var G__32083 = chunk__32074_32078;
var G__32084 = count__32075_32079;
var G__32085 = (i__32076_32080 + (1));
seq__32073_32077 = G__32082;
chunk__32074_32078 = G__32083;
count__32075_32079 = G__32084;
i__32076_32080 = G__32085;
continue;
}
} else
{var temp__4126__auto___32086 = cljs.core.seq.call(null,seq__32073_32077);if(temp__4126__auto___32086)
{var seq__32073_32087__$1 = temp__4126__auto___32086;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32073_32087__$1))
{var c__4299__auto___32088 = cljs.core.chunk_first.call(null,seq__32073_32087__$1);{
var G__32089 = cljs.core.chunk_rest.call(null,seq__32073_32087__$1);
var G__32090 = c__4299__auto___32088;
var G__32091 = cljs.core.count.call(null,c__4299__auto___32088);
var G__32092 = (0);
seq__32073_32077 = G__32089;
chunk__32074_32078 = G__32090;
count__32075_32079 = G__32091;
i__32076_32080 = G__32092;
continue;
}
} else
{var n_32093 = cljs.core.first.call(null,seq__32073_32087__$1);n_32093.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32094 = cljs.core.next.call(null,seq__32073_32087__$1);
var G__32095 = null;
var G__32096 = (0);
var G__32097 = (0);
seq__32073_32077 = G__32094;
chunk__32074_32078 = G__32095;
count__32075_32079 = G__32096;
i__32076_32080 = G__32097;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__32098){
var content = cljs.core.first(arglist__32098);
arglist__32098 = cljs.core.next(arglist__32098);
var name = cljs.core.first(arglist__32098);
var value = cljs.core.rest(arglist__32098);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__32103_32107 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32104_32108 = null;var count__32105_32109 = (0);var i__32106_32110 = (0);while(true){
if((i__32106_32110 < count__32105_32109))
{var n_32111 = cljs.core._nth.call(null,chunk__32104_32108,i__32106_32110);n_32111.removeAttribute(cljs.core.name.call(null,name));
{
var G__32112 = seq__32103_32107;
var G__32113 = chunk__32104_32108;
var G__32114 = count__32105_32109;
var G__32115 = (i__32106_32110 + (1));
seq__32103_32107 = G__32112;
chunk__32104_32108 = G__32113;
count__32105_32109 = G__32114;
i__32106_32110 = G__32115;
continue;
}
} else
{var temp__4126__auto___32116 = cljs.core.seq.call(null,seq__32103_32107);if(temp__4126__auto___32116)
{var seq__32103_32117__$1 = temp__4126__auto___32116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32103_32117__$1))
{var c__4299__auto___32118 = cljs.core.chunk_first.call(null,seq__32103_32117__$1);{
var G__32119 = cljs.core.chunk_rest.call(null,seq__32103_32117__$1);
var G__32120 = c__4299__auto___32118;
var G__32121 = cljs.core.count.call(null,c__4299__auto___32118);
var G__32122 = (0);
seq__32103_32107 = G__32119;
chunk__32104_32108 = G__32120;
count__32105_32109 = G__32121;
i__32106_32110 = G__32122;
continue;
}
} else
{var n_32123 = cljs.core.first.call(null,seq__32103_32117__$1);n_32123.removeAttribute(cljs.core.name.call(null,name));
{
var G__32124 = cljs.core.next.call(null,seq__32103_32117__$1);
var G__32125 = null;
var G__32126 = (0);
var G__32127 = (0);
seq__32103_32107 = G__32124;
chunk__32104_32108 = G__32125;
count__32105_32109 = G__32126;
i__32106_32110 = G__32127;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__32129 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__32129,(0),null);var v = cljs.core.nth.call(null,vec__32129,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__32130_SHARP_){var attr = attrs__$1.item(p1__32130_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__32137_32143 = cljs.core.seq.call(null,styles);var chunk__32138_32144 = null;var count__32139_32145 = (0);var i__32140_32146 = (0);while(true){
if((i__32140_32146 < count__32139_32145))
{var vec__32141_32147 = cljs.core._nth.call(null,chunk__32138_32144,i__32140_32146);var name_32148 = cljs.core.nth.call(null,vec__32141_32147,(0),null);var value_32149 = cljs.core.nth.call(null,vec__32141_32147,(1),null);domina.set_style_BANG_.call(null,content,name_32148,value_32149);
{
var G__32150 = seq__32137_32143;
var G__32151 = chunk__32138_32144;
var G__32152 = count__32139_32145;
var G__32153 = (i__32140_32146 + (1));
seq__32137_32143 = G__32150;
chunk__32138_32144 = G__32151;
count__32139_32145 = G__32152;
i__32140_32146 = G__32153;
continue;
}
} else
{var temp__4126__auto___32154 = cljs.core.seq.call(null,seq__32137_32143);if(temp__4126__auto___32154)
{var seq__32137_32155__$1 = temp__4126__auto___32154;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32137_32155__$1))
{var c__4299__auto___32156 = cljs.core.chunk_first.call(null,seq__32137_32155__$1);{
var G__32157 = cljs.core.chunk_rest.call(null,seq__32137_32155__$1);
var G__32158 = c__4299__auto___32156;
var G__32159 = cljs.core.count.call(null,c__4299__auto___32156);
var G__32160 = (0);
seq__32137_32143 = G__32157;
chunk__32138_32144 = G__32158;
count__32139_32145 = G__32159;
i__32140_32146 = G__32160;
continue;
}
} else
{var vec__32142_32161 = cljs.core.first.call(null,seq__32137_32155__$1);var name_32162 = cljs.core.nth.call(null,vec__32142_32161,(0),null);var value_32163 = cljs.core.nth.call(null,vec__32142_32161,(1),null);domina.set_style_BANG_.call(null,content,name_32162,value_32163);
{
var G__32164 = cljs.core.next.call(null,seq__32137_32155__$1);
var G__32165 = null;
var G__32166 = (0);
var G__32167 = (0);
seq__32137_32143 = G__32164;
chunk__32138_32144 = G__32165;
count__32139_32145 = G__32166;
i__32140_32146 = G__32167;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__32174_32180 = cljs.core.seq.call(null,attrs);var chunk__32175_32181 = null;var count__32176_32182 = (0);var i__32177_32183 = (0);while(true){
if((i__32177_32183 < count__32176_32182))
{var vec__32178_32184 = cljs.core._nth.call(null,chunk__32175_32181,i__32177_32183);var name_32185 = cljs.core.nth.call(null,vec__32178_32184,(0),null);var value_32186 = cljs.core.nth.call(null,vec__32178_32184,(1),null);domina.set_attr_BANG_.call(null,content,name_32185,value_32186);
{
var G__32187 = seq__32174_32180;
var G__32188 = chunk__32175_32181;
var G__32189 = count__32176_32182;
var G__32190 = (i__32177_32183 + (1));
seq__32174_32180 = G__32187;
chunk__32175_32181 = G__32188;
count__32176_32182 = G__32189;
i__32177_32183 = G__32190;
continue;
}
} else
{var temp__4126__auto___32191 = cljs.core.seq.call(null,seq__32174_32180);if(temp__4126__auto___32191)
{var seq__32174_32192__$1 = temp__4126__auto___32191;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32174_32192__$1))
{var c__4299__auto___32193 = cljs.core.chunk_first.call(null,seq__32174_32192__$1);{
var G__32194 = cljs.core.chunk_rest.call(null,seq__32174_32192__$1);
var G__32195 = c__4299__auto___32193;
var G__32196 = cljs.core.count.call(null,c__4299__auto___32193);
var G__32197 = (0);
seq__32174_32180 = G__32194;
chunk__32175_32181 = G__32195;
count__32176_32182 = G__32196;
i__32177_32183 = G__32197;
continue;
}
} else
{var vec__32179_32198 = cljs.core.first.call(null,seq__32174_32192__$1);var name_32199 = cljs.core.nth.call(null,vec__32179_32198,(0),null);var value_32200 = cljs.core.nth.call(null,vec__32179_32198,(1),null);domina.set_attr_BANG_.call(null,content,name_32199,value_32200);
{
var G__32201 = cljs.core.next.call(null,seq__32174_32192__$1);
var G__32202 = null;
var G__32203 = (0);
var G__32204 = (0);
seq__32174_32180 = G__32201;
chunk__32175_32181 = G__32202;
count__32176_32182 = G__32203;
i__32177_32183 = G__32204;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__32209_32213 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32210_32214 = null;var count__32211_32215 = (0);var i__32212_32216 = (0);while(true){
if((i__32212_32216 < count__32211_32215))
{var node_32217 = cljs.core._nth.call(null,chunk__32210_32214,i__32212_32216);goog.dom.classes.add(node_32217,class$);
{
var G__32218 = seq__32209_32213;
var G__32219 = chunk__32210_32214;
var G__32220 = count__32211_32215;
var G__32221 = (i__32212_32216 + (1));
seq__32209_32213 = G__32218;
chunk__32210_32214 = G__32219;
count__32211_32215 = G__32220;
i__32212_32216 = G__32221;
continue;
}
} else
{var temp__4126__auto___32222 = cljs.core.seq.call(null,seq__32209_32213);if(temp__4126__auto___32222)
{var seq__32209_32223__$1 = temp__4126__auto___32222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32209_32223__$1))
{var c__4299__auto___32224 = cljs.core.chunk_first.call(null,seq__32209_32223__$1);{
var G__32225 = cljs.core.chunk_rest.call(null,seq__32209_32223__$1);
var G__32226 = c__4299__auto___32224;
var G__32227 = cljs.core.count.call(null,c__4299__auto___32224);
var G__32228 = (0);
seq__32209_32213 = G__32225;
chunk__32210_32214 = G__32226;
count__32211_32215 = G__32227;
i__32212_32216 = G__32228;
continue;
}
} else
{var node_32229 = cljs.core.first.call(null,seq__32209_32223__$1);goog.dom.classes.add(node_32229,class$);
{
var G__32230 = cljs.core.next.call(null,seq__32209_32223__$1);
var G__32231 = null;
var G__32232 = (0);
var G__32233 = (0);
seq__32209_32213 = G__32230;
chunk__32210_32214 = G__32231;
count__32211_32215 = G__32232;
i__32212_32216 = G__32233;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__32238_32242 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32239_32243 = null;var count__32240_32244 = (0);var i__32241_32245 = (0);while(true){
if((i__32241_32245 < count__32240_32244))
{var node_32246 = cljs.core._nth.call(null,chunk__32239_32243,i__32241_32245);goog.dom.classes.remove(node_32246,class$);
{
var G__32247 = seq__32238_32242;
var G__32248 = chunk__32239_32243;
var G__32249 = count__32240_32244;
var G__32250 = (i__32241_32245 + (1));
seq__32238_32242 = G__32247;
chunk__32239_32243 = G__32248;
count__32240_32244 = G__32249;
i__32241_32245 = G__32250;
continue;
}
} else
{var temp__4126__auto___32251 = cljs.core.seq.call(null,seq__32238_32242);if(temp__4126__auto___32251)
{var seq__32238_32252__$1 = temp__4126__auto___32251;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32238_32252__$1))
{var c__4299__auto___32253 = cljs.core.chunk_first.call(null,seq__32238_32252__$1);{
var G__32254 = cljs.core.chunk_rest.call(null,seq__32238_32252__$1);
var G__32255 = c__4299__auto___32253;
var G__32256 = cljs.core.count.call(null,c__4299__auto___32253);
var G__32257 = (0);
seq__32238_32242 = G__32254;
chunk__32239_32243 = G__32255;
count__32240_32244 = G__32256;
i__32241_32245 = G__32257;
continue;
}
} else
{var node_32258 = cljs.core.first.call(null,seq__32238_32252__$1);goog.dom.classes.remove(node_32258,class$);
{
var G__32259 = cljs.core.next.call(null,seq__32238_32252__$1);
var G__32260 = null;
var G__32261 = (0);
var G__32262 = (0);
seq__32238_32242 = G__32259;
chunk__32239_32243 = G__32260;
count__32240_32244 = G__32261;
i__32241_32245 = G__32262;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__32267_32271 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32268_32272 = null;var count__32269_32273 = (0);var i__32270_32274 = (0);while(true){
if((i__32270_32274 < count__32269_32273))
{var node_32275 = cljs.core._nth.call(null,chunk__32268_32272,i__32270_32274);goog.dom.classes.toggle(node_32275,class$);
{
var G__32276 = seq__32267_32271;
var G__32277 = chunk__32268_32272;
var G__32278 = count__32269_32273;
var G__32279 = (i__32270_32274 + (1));
seq__32267_32271 = G__32276;
chunk__32268_32272 = G__32277;
count__32269_32273 = G__32278;
i__32270_32274 = G__32279;
continue;
}
} else
{var temp__4126__auto___32280 = cljs.core.seq.call(null,seq__32267_32271);if(temp__4126__auto___32280)
{var seq__32267_32281__$1 = temp__4126__auto___32280;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32267_32281__$1))
{var c__4299__auto___32282 = cljs.core.chunk_first.call(null,seq__32267_32281__$1);{
var G__32283 = cljs.core.chunk_rest.call(null,seq__32267_32281__$1);
var G__32284 = c__4299__auto___32282;
var G__32285 = cljs.core.count.call(null,c__4299__auto___32282);
var G__32286 = (0);
seq__32267_32271 = G__32283;
chunk__32268_32272 = G__32284;
count__32269_32273 = G__32285;
i__32270_32274 = G__32286;
continue;
}
} else
{var node_32287 = cljs.core.first.call(null,seq__32267_32281__$1);goog.dom.classes.toggle(node_32287,class$);
{
var G__32288 = cljs.core.next.call(null,seq__32267_32281__$1);
var G__32289 = null;
var G__32290 = (0);
var G__32291 = (0);
seq__32267_32271 = G__32288;
chunk__32268_32272 = G__32289;
count__32269_32273 = G__32290;
i__32270_32274 = G__32291;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_32300__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__32296_32301 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32297_32302 = null;var count__32298_32303 = (0);var i__32299_32304 = (0);while(true){
if((i__32299_32304 < count__32298_32303))
{var node_32305 = cljs.core._nth.call(null,chunk__32297_32302,i__32299_32304);goog.dom.classes.set(node_32305,classes_32300__$1);
{
var G__32306 = seq__32296_32301;
var G__32307 = chunk__32297_32302;
var G__32308 = count__32298_32303;
var G__32309 = (i__32299_32304 + (1));
seq__32296_32301 = G__32306;
chunk__32297_32302 = G__32307;
count__32298_32303 = G__32308;
i__32299_32304 = G__32309;
continue;
}
} else
{var temp__4126__auto___32310 = cljs.core.seq.call(null,seq__32296_32301);if(temp__4126__auto___32310)
{var seq__32296_32311__$1 = temp__4126__auto___32310;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32296_32311__$1))
{var c__4299__auto___32312 = cljs.core.chunk_first.call(null,seq__32296_32311__$1);{
var G__32313 = cljs.core.chunk_rest.call(null,seq__32296_32311__$1);
var G__32314 = c__4299__auto___32312;
var G__32315 = cljs.core.count.call(null,c__4299__auto___32312);
var G__32316 = (0);
seq__32296_32301 = G__32313;
chunk__32297_32302 = G__32314;
count__32298_32303 = G__32315;
i__32299_32304 = G__32316;
continue;
}
} else
{var node_32317 = cljs.core.first.call(null,seq__32296_32311__$1);goog.dom.classes.set(node_32317,classes_32300__$1);
{
var G__32318 = cljs.core.next.call(null,seq__32296_32311__$1);
var G__32319 = null;
var G__32320 = (0);
var G__32321 = (0);
seq__32296_32301 = G__32318;
chunk__32297_32302 = G__32319;
count__32298_32303 = G__32320;
i__32299_32304 = G__32321;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__32326_32330 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32327_32331 = null;var count__32328_32332 = (0);var i__32329_32333 = (0);while(true){
if((i__32329_32333 < count__32328_32332))
{var node_32334 = cljs.core._nth.call(null,chunk__32327_32331,i__32329_32333);goog.dom.setTextContent(node_32334,value);
{
var G__32335 = seq__32326_32330;
var G__32336 = chunk__32327_32331;
var G__32337 = count__32328_32332;
var G__32338 = (i__32329_32333 + (1));
seq__32326_32330 = G__32335;
chunk__32327_32331 = G__32336;
count__32328_32332 = G__32337;
i__32329_32333 = G__32338;
continue;
}
} else
{var temp__4126__auto___32339 = cljs.core.seq.call(null,seq__32326_32330);if(temp__4126__auto___32339)
{var seq__32326_32340__$1 = temp__4126__auto___32339;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32326_32340__$1))
{var c__4299__auto___32341 = cljs.core.chunk_first.call(null,seq__32326_32340__$1);{
var G__32342 = cljs.core.chunk_rest.call(null,seq__32326_32340__$1);
var G__32343 = c__4299__auto___32341;
var G__32344 = cljs.core.count.call(null,c__4299__auto___32341);
var G__32345 = (0);
seq__32326_32330 = G__32342;
chunk__32327_32331 = G__32343;
count__32328_32332 = G__32344;
i__32329_32333 = G__32345;
continue;
}
} else
{var node_32346 = cljs.core.first.call(null,seq__32326_32340__$1);goog.dom.setTextContent(node_32346,value);
{
var G__32347 = cljs.core.next.call(null,seq__32326_32340__$1);
var G__32348 = null;
var G__32349 = (0);
var G__32350 = (0);
seq__32326_32330 = G__32347;
chunk__32327_32331 = G__32348;
count__32328_32332 = G__32349;
i__32329_32333 = G__32350;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__32355_32359 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32356_32360 = null;var count__32357_32361 = (0);var i__32358_32362 = (0);while(true){
if((i__32358_32362 < count__32357_32361))
{var node_32363 = cljs.core._nth.call(null,chunk__32356_32360,i__32358_32362);goog.dom.forms.setValue(node_32363,value);
{
var G__32364 = seq__32355_32359;
var G__32365 = chunk__32356_32360;
var G__32366 = count__32357_32361;
var G__32367 = (i__32358_32362 + (1));
seq__32355_32359 = G__32364;
chunk__32356_32360 = G__32365;
count__32357_32361 = G__32366;
i__32358_32362 = G__32367;
continue;
}
} else
{var temp__4126__auto___32368 = cljs.core.seq.call(null,seq__32355_32359);if(temp__4126__auto___32368)
{var seq__32355_32369__$1 = temp__4126__auto___32368;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32355_32369__$1))
{var c__4299__auto___32370 = cljs.core.chunk_first.call(null,seq__32355_32369__$1);{
var G__32371 = cljs.core.chunk_rest.call(null,seq__32355_32369__$1);
var G__32372 = c__4299__auto___32370;
var G__32373 = cljs.core.count.call(null,c__4299__auto___32370);
var G__32374 = (0);
seq__32355_32359 = G__32371;
chunk__32356_32360 = G__32372;
count__32357_32361 = G__32373;
i__32358_32362 = G__32374;
continue;
}
} else
{var node_32375 = cljs.core.first.call(null,seq__32355_32369__$1);goog.dom.forms.setValue(node_32375,value);
{
var G__32376 = cljs.core.next.call(null,seq__32355_32369__$1);
var G__32377 = null;
var G__32378 = (0);
var G__32379 = (0);
seq__32355_32359 = G__32376;
chunk__32356_32360 = G__32377;
count__32357_32361 = G__32378;
i__32358_32362 = G__32379;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_32390 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__32386_32391 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32387_32392 = null;var count__32388_32393 = (0);var i__32389_32394 = (0);while(true){
if((i__32389_32394 < count__32388_32393))
{var node_32395 = cljs.core._nth.call(null,chunk__32387_32392,i__32389_32394);node_32395.innerHTML = value_32390;
{
var G__32396 = seq__32386_32391;
var G__32397 = chunk__32387_32392;
var G__32398 = count__32388_32393;
var G__32399 = (i__32389_32394 + (1));
seq__32386_32391 = G__32396;
chunk__32387_32392 = G__32397;
count__32388_32393 = G__32398;
i__32389_32394 = G__32399;
continue;
}
} else
{var temp__4126__auto___32400 = cljs.core.seq.call(null,seq__32386_32391);if(temp__4126__auto___32400)
{var seq__32386_32401__$1 = temp__4126__auto___32400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32386_32401__$1))
{var c__4299__auto___32402 = cljs.core.chunk_first.call(null,seq__32386_32401__$1);{
var G__32403 = cljs.core.chunk_rest.call(null,seq__32386_32401__$1);
var G__32404 = c__4299__auto___32402;
var G__32405 = cljs.core.count.call(null,c__4299__auto___32402);
var G__32406 = (0);
seq__32386_32391 = G__32403;
chunk__32387_32392 = G__32404;
count__32388_32393 = G__32405;
i__32389_32394 = G__32406;
continue;
}
} else
{var node_32407 = cljs.core.first.call(null,seq__32386_32401__$1);node_32407.innerHTML = value_32390;
{
var G__32408 = cljs.core.next.call(null,seq__32386_32401__$1);
var G__32409 = null;
var G__32410 = (0);
var G__32411 = (0);
seq__32386_32391 = G__32408;
chunk__32387_32392 = G__32409;
count__32388_32393 = G__32410;
i__32389_32394 = G__32411;
continue;
}
}
} else
{}
}
break;
}
}catch (e32385){if((e32385 instanceof Error))
{var e_32412 = e32385;domina.replace_children_BANG_.call(null,content,value_32390);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32385;
} else
{}
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__32419_32423 = cljs.core.seq.call(null,children);var chunk__32420_32424 = null;var count__32421_32425 = (0);var i__32422_32426 = (0);while(true){
if((i__32422_32426 < count__32421_32425))
{var child_32427 = cljs.core._nth.call(null,chunk__32420_32424,i__32422_32426);frag.appendChild(child_32427);
{
var G__32428 = seq__32419_32423;
var G__32429 = chunk__32420_32424;
var G__32430 = count__32421_32425;
var G__32431 = (i__32422_32426 + (1));
seq__32419_32423 = G__32428;
chunk__32420_32424 = G__32429;
count__32421_32425 = G__32430;
i__32422_32426 = G__32431;
continue;
}
} else
{var temp__4126__auto___32432 = cljs.core.seq.call(null,seq__32419_32423);if(temp__4126__auto___32432)
{var seq__32419_32433__$1 = temp__4126__auto___32432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32419_32433__$1))
{var c__4299__auto___32434 = cljs.core.chunk_first.call(null,seq__32419_32433__$1);{
var G__32435 = cljs.core.chunk_rest.call(null,seq__32419_32433__$1);
var G__32436 = c__4299__auto___32434;
var G__32437 = cljs.core.count.call(null,c__4299__auto___32434);
var G__32438 = (0);
seq__32419_32423 = G__32435;
chunk__32420_32424 = G__32436;
count__32421_32425 = G__32437;
i__32422_32426 = G__32438;
continue;
}
} else
{var child_32439 = cljs.core.first.call(null,seq__32419_32433__$1);frag.appendChild(child_32439);
{
var G__32440 = cljs.core.next.call(null,seq__32419_32433__$1);
var G__32441 = null;
var G__32442 = (0);
var G__32443 = (0);
seq__32419_32423 = G__32440;
chunk__32420_32424 = G__32441;
count__32421_32425 = G__32442;
i__32422_32426 = G__32443;
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
return (function (p1__32413_SHARP_,p2__32414_SHARP_){return f.call(null,p1__32413_SHARP_,p2__32414_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
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
{if((function (){var G__32445 = list_thing;if(G__32445)
{var bit__4193__auto__ = (G__32445.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__32445.cljs$core$ISeqable$))
{return true;
} else
{if((!G__32445.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32445);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32445);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__32446 = content;if(G__32446)
{var bit__4193__auto__ = (G__32446.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__32446.cljs$core$ISeqable$))
{return true;
} else
{if((!G__32446.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32446);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32446);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__32447 = content;if(G__32447)
{var bit__4193__auto__ = (G__32447.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__32447.cljs$core$ISeqable$))
{return true;
} else
{if((!G__32447.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32447);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32447);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return content;
} else
{return null;
}
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
