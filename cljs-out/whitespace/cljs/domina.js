// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_35987 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_35988 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_35989 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_35988,table_section_wrapper_35988,opt_wrapper_35987,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_35989,table_section_wrapper_35988,cell_wrapper_35989,opt_wrapper_35987,table_section_wrapper_35988,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_35988]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__35994 = cljs.core.seq.call(null,tbody);var chunk__35995 = null;var count__35996 = 0;var i__35997 = 0;while(true){
if((i__35997 < count__35996))
{var child = cljs.core._nth.call(null,chunk__35995,i__35997);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__35998 = seq__35994;
var G__35999 = chunk__35995;
var G__36000 = count__35996;
var G__36001 = (i__35997 + 1);
seq__35994 = G__35998;
chunk__35995 = G__35999;
count__35996 = G__36000;
i__35997 = G__36001;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__35994);if(temp__4092__auto__)
{var seq__35994__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35994__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__35994__$1);{
var G__36002 = cljs.core.chunk_rest.call(null,seq__35994__$1);
var G__36003 = c__4148__auto__;
var G__36004 = cljs.core.count.call(null,c__4148__auto__);
var G__36005 = 0;
seq__35994 = G__36002;
chunk__35995 = G__36003;
count__35996 = G__36004;
i__35997 = G__36005;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__35994__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36006 = cljs.core.next.call(null,seq__35994__$1);
var G__36007 = null;
var G__36008 = 0;
var G__36009 = 0;
seq__35994 = G__36006;
chunk__35995 = G__36007;
count__35996 = G__36008;
i__35997 = G__36009;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__36011 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__36011,0,null);var start_wrap = cljs.core.nth.call(null,vec__36011,1,null);var end_wrap = cljs.core.nth.call(null,vec__36011,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__36012 = wrapper.lastChild;
var G__36013 = (level - 1);
wrapper = G__36012;
level = G__36013;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj36015 = {};return obj36015;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__36016){
var mesg = cljs.core.seq(arglist__36016);
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
log.cljs$lang$applyTo = (function (arglist__36017){
var mesg = cljs.core.seq(arglist__36017);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__36018){
var contents = cljs.core.seq(arglist__36018);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__36019_SHARP_){return p1__36019_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__36020_SHARP_,p2__36021_SHARP_){return goog.dom.insertChildAt(p1__36020_SHARP_,p2__36021_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36023_SHARP_,p2__36022_SHARP_){return goog.dom.insertSiblingBefore(p2__36022_SHARP_,p1__36023_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36025_SHARP_,p2__36024_SHARP_){return goog.dom.insertSiblingAfter(p2__36024_SHARP_,p1__36025_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__36027_SHARP_,p2__36026_SHARP_){return goog.dom.replaceNode(p2__36026_SHARP_,p1__36027_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__36032_36036 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36033_36037 = null;var count__36034_36038 = 0;var i__36035_36039 = 0;while(true){
if((i__36035_36039 < count__36034_36038))
{var n_36040 = cljs.core._nth.call(null,chunk__36033_36037,i__36035_36039);goog.style.setStyle(n_36040,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36041 = seq__36032_36036;
var G__36042 = chunk__36033_36037;
var G__36043 = count__36034_36038;
var G__36044 = (i__36035_36039 + 1);
seq__36032_36036 = G__36041;
chunk__36033_36037 = G__36042;
count__36034_36038 = G__36043;
i__36035_36039 = G__36044;
continue;
}
} else
{var temp__4092__auto___36045 = cljs.core.seq.call(null,seq__36032_36036);if(temp__4092__auto___36045)
{var seq__36032_36046__$1 = temp__4092__auto___36045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36032_36046__$1))
{var c__4148__auto___36047 = cljs.core.chunk_first.call(null,seq__36032_36046__$1);{
var G__36048 = cljs.core.chunk_rest.call(null,seq__36032_36046__$1);
var G__36049 = c__4148__auto___36047;
var G__36050 = cljs.core.count.call(null,c__4148__auto___36047);
var G__36051 = 0;
seq__36032_36036 = G__36048;
chunk__36033_36037 = G__36049;
count__36034_36038 = G__36050;
i__36035_36039 = G__36051;
continue;
}
} else
{var n_36052 = cljs.core.first.call(null,seq__36032_36046__$1);goog.style.setStyle(n_36052,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36053 = cljs.core.next.call(null,seq__36032_36046__$1);
var G__36054 = null;
var G__36055 = 0;
var G__36056 = 0;
seq__36032_36036 = G__36053;
chunk__36033_36037 = G__36054;
count__36034_36038 = G__36055;
i__36035_36039 = G__36056;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__36057){
var content = cljs.core.first(arglist__36057);
arglist__36057 = cljs.core.next(arglist__36057);
var name = cljs.core.first(arglist__36057);
var value = cljs.core.rest(arglist__36057);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__36062_36066 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36063_36067 = null;var count__36064_36068 = 0;var i__36065_36069 = 0;while(true){
if((i__36065_36069 < count__36064_36068))
{var n_36070 = cljs.core._nth.call(null,chunk__36063_36067,i__36065_36069);n_36070.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36071 = seq__36062_36066;
var G__36072 = chunk__36063_36067;
var G__36073 = count__36064_36068;
var G__36074 = (i__36065_36069 + 1);
seq__36062_36066 = G__36071;
chunk__36063_36067 = G__36072;
count__36064_36068 = G__36073;
i__36065_36069 = G__36074;
continue;
}
} else
{var temp__4092__auto___36075 = cljs.core.seq.call(null,seq__36062_36066);if(temp__4092__auto___36075)
{var seq__36062_36076__$1 = temp__4092__auto___36075;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36062_36076__$1))
{var c__4148__auto___36077 = cljs.core.chunk_first.call(null,seq__36062_36076__$1);{
var G__36078 = cljs.core.chunk_rest.call(null,seq__36062_36076__$1);
var G__36079 = c__4148__auto___36077;
var G__36080 = cljs.core.count.call(null,c__4148__auto___36077);
var G__36081 = 0;
seq__36062_36066 = G__36078;
chunk__36063_36067 = G__36079;
count__36064_36068 = G__36080;
i__36065_36069 = G__36081;
continue;
}
} else
{var n_36082 = cljs.core.first.call(null,seq__36062_36076__$1);n_36082.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36083 = cljs.core.next.call(null,seq__36062_36076__$1);
var G__36084 = null;
var G__36085 = 0;
var G__36086 = 0;
seq__36062_36066 = G__36083;
chunk__36063_36067 = G__36084;
count__36064_36068 = G__36085;
i__36065_36069 = G__36086;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__36087){
var content = cljs.core.first(arglist__36087);
arglist__36087 = cljs.core.next(arglist__36087);
var name = cljs.core.first(arglist__36087);
var value = cljs.core.rest(arglist__36087);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__36092_36096 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36093_36097 = null;var count__36094_36098 = 0;var i__36095_36099 = 0;while(true){
if((i__36095_36099 < count__36094_36098))
{var n_36100 = cljs.core._nth.call(null,chunk__36093_36097,i__36095_36099);n_36100.removeAttribute(cljs.core.name.call(null,name));
{
var G__36101 = seq__36092_36096;
var G__36102 = chunk__36093_36097;
var G__36103 = count__36094_36098;
var G__36104 = (i__36095_36099 + 1);
seq__36092_36096 = G__36101;
chunk__36093_36097 = G__36102;
count__36094_36098 = G__36103;
i__36095_36099 = G__36104;
continue;
}
} else
{var temp__4092__auto___36105 = cljs.core.seq.call(null,seq__36092_36096);if(temp__4092__auto___36105)
{var seq__36092_36106__$1 = temp__4092__auto___36105;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36092_36106__$1))
{var c__4148__auto___36107 = cljs.core.chunk_first.call(null,seq__36092_36106__$1);{
var G__36108 = cljs.core.chunk_rest.call(null,seq__36092_36106__$1);
var G__36109 = c__4148__auto___36107;
var G__36110 = cljs.core.count.call(null,c__4148__auto___36107);
var G__36111 = 0;
seq__36092_36096 = G__36108;
chunk__36093_36097 = G__36109;
count__36094_36098 = G__36110;
i__36095_36099 = G__36111;
continue;
}
} else
{var n_36112 = cljs.core.first.call(null,seq__36092_36106__$1);n_36112.removeAttribute(cljs.core.name.call(null,name));
{
var G__36113 = cljs.core.next.call(null,seq__36092_36106__$1);
var G__36114 = null;
var G__36115 = 0;
var G__36116 = 0;
seq__36092_36096 = G__36113;
chunk__36093_36097 = G__36114;
count__36094_36098 = G__36115;
i__36095_36099 = G__36116;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__36118 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__36118,0,null);var v = cljs.core.nth.call(null,vec__36118,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__36119_SHARP_){var attr = attrs__$1.item(p1__36119_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__36126_36132 = cljs.core.seq.call(null,styles);var chunk__36127_36133 = null;var count__36128_36134 = 0;var i__36129_36135 = 0;while(true){
if((i__36129_36135 < count__36128_36134))
{var vec__36130_36136 = cljs.core._nth.call(null,chunk__36127_36133,i__36129_36135);var name_36137 = cljs.core.nth.call(null,vec__36130_36136,0,null);var value_36138 = cljs.core.nth.call(null,vec__36130_36136,1,null);domina.set_style_BANG_.call(null,content,name_36137,value_36138);
{
var G__36139 = seq__36126_36132;
var G__36140 = chunk__36127_36133;
var G__36141 = count__36128_36134;
var G__36142 = (i__36129_36135 + 1);
seq__36126_36132 = G__36139;
chunk__36127_36133 = G__36140;
count__36128_36134 = G__36141;
i__36129_36135 = G__36142;
continue;
}
} else
{var temp__4092__auto___36143 = cljs.core.seq.call(null,seq__36126_36132);if(temp__4092__auto___36143)
{var seq__36126_36144__$1 = temp__4092__auto___36143;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36126_36144__$1))
{var c__4148__auto___36145 = cljs.core.chunk_first.call(null,seq__36126_36144__$1);{
var G__36146 = cljs.core.chunk_rest.call(null,seq__36126_36144__$1);
var G__36147 = c__4148__auto___36145;
var G__36148 = cljs.core.count.call(null,c__4148__auto___36145);
var G__36149 = 0;
seq__36126_36132 = G__36146;
chunk__36127_36133 = G__36147;
count__36128_36134 = G__36148;
i__36129_36135 = G__36149;
continue;
}
} else
{var vec__36131_36150 = cljs.core.first.call(null,seq__36126_36144__$1);var name_36151 = cljs.core.nth.call(null,vec__36131_36150,0,null);var value_36152 = cljs.core.nth.call(null,vec__36131_36150,1,null);domina.set_style_BANG_.call(null,content,name_36151,value_36152);
{
var G__36153 = cljs.core.next.call(null,seq__36126_36144__$1);
var G__36154 = null;
var G__36155 = 0;
var G__36156 = 0;
seq__36126_36132 = G__36153;
chunk__36127_36133 = G__36154;
count__36128_36134 = G__36155;
i__36129_36135 = G__36156;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__36163_36169 = cljs.core.seq.call(null,attrs);var chunk__36164_36170 = null;var count__36165_36171 = 0;var i__36166_36172 = 0;while(true){
if((i__36166_36172 < count__36165_36171))
{var vec__36167_36173 = cljs.core._nth.call(null,chunk__36164_36170,i__36166_36172);var name_36174 = cljs.core.nth.call(null,vec__36167_36173,0,null);var value_36175 = cljs.core.nth.call(null,vec__36167_36173,1,null);domina.set_attr_BANG_.call(null,content,name_36174,value_36175);
{
var G__36176 = seq__36163_36169;
var G__36177 = chunk__36164_36170;
var G__36178 = count__36165_36171;
var G__36179 = (i__36166_36172 + 1);
seq__36163_36169 = G__36176;
chunk__36164_36170 = G__36177;
count__36165_36171 = G__36178;
i__36166_36172 = G__36179;
continue;
}
} else
{var temp__4092__auto___36180 = cljs.core.seq.call(null,seq__36163_36169);if(temp__4092__auto___36180)
{var seq__36163_36181__$1 = temp__4092__auto___36180;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36163_36181__$1))
{var c__4148__auto___36182 = cljs.core.chunk_first.call(null,seq__36163_36181__$1);{
var G__36183 = cljs.core.chunk_rest.call(null,seq__36163_36181__$1);
var G__36184 = c__4148__auto___36182;
var G__36185 = cljs.core.count.call(null,c__4148__auto___36182);
var G__36186 = 0;
seq__36163_36169 = G__36183;
chunk__36164_36170 = G__36184;
count__36165_36171 = G__36185;
i__36166_36172 = G__36186;
continue;
}
} else
{var vec__36168_36187 = cljs.core.first.call(null,seq__36163_36181__$1);var name_36188 = cljs.core.nth.call(null,vec__36168_36187,0,null);var value_36189 = cljs.core.nth.call(null,vec__36168_36187,1,null);domina.set_attr_BANG_.call(null,content,name_36188,value_36189);
{
var G__36190 = cljs.core.next.call(null,seq__36163_36181__$1);
var G__36191 = null;
var G__36192 = 0;
var G__36193 = 0;
seq__36163_36169 = G__36190;
chunk__36164_36170 = G__36191;
count__36165_36171 = G__36192;
i__36166_36172 = G__36193;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__36198_36202 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36199_36203 = null;var count__36200_36204 = 0;var i__36201_36205 = 0;while(true){
if((i__36201_36205 < count__36200_36204))
{var node_36206 = cljs.core._nth.call(null,chunk__36199_36203,i__36201_36205);goog.dom.classes.add(node_36206,class$);
{
var G__36207 = seq__36198_36202;
var G__36208 = chunk__36199_36203;
var G__36209 = count__36200_36204;
var G__36210 = (i__36201_36205 + 1);
seq__36198_36202 = G__36207;
chunk__36199_36203 = G__36208;
count__36200_36204 = G__36209;
i__36201_36205 = G__36210;
continue;
}
} else
{var temp__4092__auto___36211 = cljs.core.seq.call(null,seq__36198_36202);if(temp__4092__auto___36211)
{var seq__36198_36212__$1 = temp__4092__auto___36211;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36198_36212__$1))
{var c__4148__auto___36213 = cljs.core.chunk_first.call(null,seq__36198_36212__$1);{
var G__36214 = cljs.core.chunk_rest.call(null,seq__36198_36212__$1);
var G__36215 = c__4148__auto___36213;
var G__36216 = cljs.core.count.call(null,c__4148__auto___36213);
var G__36217 = 0;
seq__36198_36202 = G__36214;
chunk__36199_36203 = G__36215;
count__36200_36204 = G__36216;
i__36201_36205 = G__36217;
continue;
}
} else
{var node_36218 = cljs.core.first.call(null,seq__36198_36212__$1);goog.dom.classes.add(node_36218,class$);
{
var G__36219 = cljs.core.next.call(null,seq__36198_36212__$1);
var G__36220 = null;
var G__36221 = 0;
var G__36222 = 0;
seq__36198_36202 = G__36219;
chunk__36199_36203 = G__36220;
count__36200_36204 = G__36221;
i__36201_36205 = G__36222;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__36227_36231 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36228_36232 = null;var count__36229_36233 = 0;var i__36230_36234 = 0;while(true){
if((i__36230_36234 < count__36229_36233))
{var node_36235 = cljs.core._nth.call(null,chunk__36228_36232,i__36230_36234);goog.dom.classes.remove(node_36235,class$);
{
var G__36236 = seq__36227_36231;
var G__36237 = chunk__36228_36232;
var G__36238 = count__36229_36233;
var G__36239 = (i__36230_36234 + 1);
seq__36227_36231 = G__36236;
chunk__36228_36232 = G__36237;
count__36229_36233 = G__36238;
i__36230_36234 = G__36239;
continue;
}
} else
{var temp__4092__auto___36240 = cljs.core.seq.call(null,seq__36227_36231);if(temp__4092__auto___36240)
{var seq__36227_36241__$1 = temp__4092__auto___36240;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36227_36241__$1))
{var c__4148__auto___36242 = cljs.core.chunk_first.call(null,seq__36227_36241__$1);{
var G__36243 = cljs.core.chunk_rest.call(null,seq__36227_36241__$1);
var G__36244 = c__4148__auto___36242;
var G__36245 = cljs.core.count.call(null,c__4148__auto___36242);
var G__36246 = 0;
seq__36227_36231 = G__36243;
chunk__36228_36232 = G__36244;
count__36229_36233 = G__36245;
i__36230_36234 = G__36246;
continue;
}
} else
{var node_36247 = cljs.core.first.call(null,seq__36227_36241__$1);goog.dom.classes.remove(node_36247,class$);
{
var G__36248 = cljs.core.next.call(null,seq__36227_36241__$1);
var G__36249 = null;
var G__36250 = 0;
var G__36251 = 0;
seq__36227_36231 = G__36248;
chunk__36228_36232 = G__36249;
count__36229_36233 = G__36250;
i__36230_36234 = G__36251;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__36256_36260 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36257_36261 = null;var count__36258_36262 = 0;var i__36259_36263 = 0;while(true){
if((i__36259_36263 < count__36258_36262))
{var node_36264 = cljs.core._nth.call(null,chunk__36257_36261,i__36259_36263);goog.dom.classes.toggle(node_36264,class$);
{
var G__36265 = seq__36256_36260;
var G__36266 = chunk__36257_36261;
var G__36267 = count__36258_36262;
var G__36268 = (i__36259_36263 + 1);
seq__36256_36260 = G__36265;
chunk__36257_36261 = G__36266;
count__36258_36262 = G__36267;
i__36259_36263 = G__36268;
continue;
}
} else
{var temp__4092__auto___36269 = cljs.core.seq.call(null,seq__36256_36260);if(temp__4092__auto___36269)
{var seq__36256_36270__$1 = temp__4092__auto___36269;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36256_36270__$1))
{var c__4148__auto___36271 = cljs.core.chunk_first.call(null,seq__36256_36270__$1);{
var G__36272 = cljs.core.chunk_rest.call(null,seq__36256_36270__$1);
var G__36273 = c__4148__auto___36271;
var G__36274 = cljs.core.count.call(null,c__4148__auto___36271);
var G__36275 = 0;
seq__36256_36260 = G__36272;
chunk__36257_36261 = G__36273;
count__36258_36262 = G__36274;
i__36259_36263 = G__36275;
continue;
}
} else
{var node_36276 = cljs.core.first.call(null,seq__36256_36270__$1);goog.dom.classes.toggle(node_36276,class$);
{
var G__36277 = cljs.core.next.call(null,seq__36256_36270__$1);
var G__36278 = null;
var G__36279 = 0;
var G__36280 = 0;
seq__36256_36260 = G__36277;
chunk__36257_36261 = G__36278;
count__36258_36262 = G__36279;
i__36259_36263 = G__36280;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_36289__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__36285_36290 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36286_36291 = null;var count__36287_36292 = 0;var i__36288_36293 = 0;while(true){
if((i__36288_36293 < count__36287_36292))
{var node_36294 = cljs.core._nth.call(null,chunk__36286_36291,i__36288_36293);goog.dom.classes.set(node_36294,classes_36289__$1);
{
var G__36295 = seq__36285_36290;
var G__36296 = chunk__36286_36291;
var G__36297 = count__36287_36292;
var G__36298 = (i__36288_36293 + 1);
seq__36285_36290 = G__36295;
chunk__36286_36291 = G__36296;
count__36287_36292 = G__36297;
i__36288_36293 = G__36298;
continue;
}
} else
{var temp__4092__auto___36299 = cljs.core.seq.call(null,seq__36285_36290);if(temp__4092__auto___36299)
{var seq__36285_36300__$1 = temp__4092__auto___36299;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36285_36300__$1))
{var c__4148__auto___36301 = cljs.core.chunk_first.call(null,seq__36285_36300__$1);{
var G__36302 = cljs.core.chunk_rest.call(null,seq__36285_36300__$1);
var G__36303 = c__4148__auto___36301;
var G__36304 = cljs.core.count.call(null,c__4148__auto___36301);
var G__36305 = 0;
seq__36285_36290 = G__36302;
chunk__36286_36291 = G__36303;
count__36287_36292 = G__36304;
i__36288_36293 = G__36305;
continue;
}
} else
{var node_36306 = cljs.core.first.call(null,seq__36285_36300__$1);goog.dom.classes.set(node_36306,classes_36289__$1);
{
var G__36307 = cljs.core.next.call(null,seq__36285_36300__$1);
var G__36308 = null;
var G__36309 = 0;
var G__36310 = 0;
seq__36285_36290 = G__36307;
chunk__36286_36291 = G__36308;
count__36287_36292 = G__36309;
i__36288_36293 = G__36310;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__36315_36319 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36316_36320 = null;var count__36317_36321 = 0;var i__36318_36322 = 0;while(true){
if((i__36318_36322 < count__36317_36321))
{var node_36323 = cljs.core._nth.call(null,chunk__36316_36320,i__36318_36322);goog.dom.setTextContent(node_36323,value);
{
var G__36324 = seq__36315_36319;
var G__36325 = chunk__36316_36320;
var G__36326 = count__36317_36321;
var G__36327 = (i__36318_36322 + 1);
seq__36315_36319 = G__36324;
chunk__36316_36320 = G__36325;
count__36317_36321 = G__36326;
i__36318_36322 = G__36327;
continue;
}
} else
{var temp__4092__auto___36328 = cljs.core.seq.call(null,seq__36315_36319);if(temp__4092__auto___36328)
{var seq__36315_36329__$1 = temp__4092__auto___36328;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36315_36329__$1))
{var c__4148__auto___36330 = cljs.core.chunk_first.call(null,seq__36315_36329__$1);{
var G__36331 = cljs.core.chunk_rest.call(null,seq__36315_36329__$1);
var G__36332 = c__4148__auto___36330;
var G__36333 = cljs.core.count.call(null,c__4148__auto___36330);
var G__36334 = 0;
seq__36315_36319 = G__36331;
chunk__36316_36320 = G__36332;
count__36317_36321 = G__36333;
i__36318_36322 = G__36334;
continue;
}
} else
{var node_36335 = cljs.core.first.call(null,seq__36315_36329__$1);goog.dom.setTextContent(node_36335,value);
{
var G__36336 = cljs.core.next.call(null,seq__36315_36329__$1);
var G__36337 = null;
var G__36338 = 0;
var G__36339 = 0;
seq__36315_36319 = G__36336;
chunk__36316_36320 = G__36337;
count__36317_36321 = G__36338;
i__36318_36322 = G__36339;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__36344_36348 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36345_36349 = null;var count__36346_36350 = 0;var i__36347_36351 = 0;while(true){
if((i__36347_36351 < count__36346_36350))
{var node_36352 = cljs.core._nth.call(null,chunk__36345_36349,i__36347_36351);goog.dom.forms.setValue(node_36352,value);
{
var G__36353 = seq__36344_36348;
var G__36354 = chunk__36345_36349;
var G__36355 = count__36346_36350;
var G__36356 = (i__36347_36351 + 1);
seq__36344_36348 = G__36353;
chunk__36345_36349 = G__36354;
count__36346_36350 = G__36355;
i__36347_36351 = G__36356;
continue;
}
} else
{var temp__4092__auto___36357 = cljs.core.seq.call(null,seq__36344_36348);if(temp__4092__auto___36357)
{var seq__36344_36358__$1 = temp__4092__auto___36357;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36344_36358__$1))
{var c__4148__auto___36359 = cljs.core.chunk_first.call(null,seq__36344_36358__$1);{
var G__36360 = cljs.core.chunk_rest.call(null,seq__36344_36358__$1);
var G__36361 = c__4148__auto___36359;
var G__36362 = cljs.core.count.call(null,c__4148__auto___36359);
var G__36363 = 0;
seq__36344_36348 = G__36360;
chunk__36345_36349 = G__36361;
count__36346_36350 = G__36362;
i__36347_36351 = G__36363;
continue;
}
} else
{var node_36364 = cljs.core.first.call(null,seq__36344_36358__$1);goog.dom.forms.setValue(node_36364,value);
{
var G__36365 = cljs.core.next.call(null,seq__36344_36358__$1);
var G__36366 = null;
var G__36367 = 0;
var G__36368 = 0;
seq__36344_36348 = G__36365;
chunk__36345_36349 = G__36366;
count__36346_36350 = G__36367;
i__36347_36351 = G__36368;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_36379 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__36375_36380 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36376_36381 = null;var count__36377_36382 = 0;var i__36378_36383 = 0;while(true){
if((i__36378_36383 < count__36377_36382))
{var node_36384 = cljs.core._nth.call(null,chunk__36376_36381,i__36378_36383);node_36384.innerHTML = value_36379;
{
var G__36385 = seq__36375_36380;
var G__36386 = chunk__36376_36381;
var G__36387 = count__36377_36382;
var G__36388 = (i__36378_36383 + 1);
seq__36375_36380 = G__36385;
chunk__36376_36381 = G__36386;
count__36377_36382 = G__36387;
i__36378_36383 = G__36388;
continue;
}
} else
{var temp__4092__auto___36389 = cljs.core.seq.call(null,seq__36375_36380);if(temp__4092__auto___36389)
{var seq__36375_36390__$1 = temp__4092__auto___36389;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36375_36390__$1))
{var c__4148__auto___36391 = cljs.core.chunk_first.call(null,seq__36375_36390__$1);{
var G__36392 = cljs.core.chunk_rest.call(null,seq__36375_36390__$1);
var G__36393 = c__4148__auto___36391;
var G__36394 = cljs.core.count.call(null,c__4148__auto___36391);
var G__36395 = 0;
seq__36375_36380 = G__36392;
chunk__36376_36381 = G__36393;
count__36377_36382 = G__36394;
i__36378_36383 = G__36395;
continue;
}
} else
{var node_36396 = cljs.core.first.call(null,seq__36375_36390__$1);node_36396.innerHTML = value_36379;
{
var G__36397 = cljs.core.next.call(null,seq__36375_36390__$1);
var G__36398 = null;
var G__36399 = 0;
var G__36400 = 0;
seq__36375_36380 = G__36397;
chunk__36376_36381 = G__36398;
count__36377_36382 = G__36399;
i__36378_36383 = G__36400;
continue;
}
}
} else
{}
}
break;
}
}catch (e36374){if((e36374 instanceof Error))
{var e_36401 = e36374;domina.replace_children_BANG_.call(null,content,value_36379);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36374;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__36408_36412 = cljs.core.seq.call(null,children);var chunk__36409_36413 = null;var count__36410_36414 = 0;var i__36411_36415 = 0;while(true){
if((i__36411_36415 < count__36410_36414))
{var child_36416 = cljs.core._nth.call(null,chunk__36409_36413,i__36411_36415);frag.appendChild(child_36416);
{
var G__36417 = seq__36408_36412;
var G__36418 = chunk__36409_36413;
var G__36419 = count__36410_36414;
var G__36420 = (i__36411_36415 + 1);
seq__36408_36412 = G__36417;
chunk__36409_36413 = G__36418;
count__36410_36414 = G__36419;
i__36411_36415 = G__36420;
continue;
}
} else
{var temp__4092__auto___36421 = cljs.core.seq.call(null,seq__36408_36412);if(temp__4092__auto___36421)
{var seq__36408_36422__$1 = temp__4092__auto___36421;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36408_36422__$1))
{var c__4148__auto___36423 = cljs.core.chunk_first.call(null,seq__36408_36422__$1);{
var G__36424 = cljs.core.chunk_rest.call(null,seq__36408_36422__$1);
var G__36425 = c__4148__auto___36423;
var G__36426 = cljs.core.count.call(null,c__4148__auto___36423);
var G__36427 = 0;
seq__36408_36412 = G__36424;
chunk__36409_36413 = G__36425;
count__36410_36414 = G__36426;
i__36411_36415 = G__36427;
continue;
}
} else
{var child_36428 = cljs.core.first.call(null,seq__36408_36422__$1);frag.appendChild(child_36428);
{
var G__36429 = cljs.core.next.call(null,seq__36408_36422__$1);
var G__36430 = null;
var G__36431 = 0;
var G__36432 = 0;
seq__36408_36412 = G__36429;
chunk__36409_36413 = G__36430;
count__36410_36414 = G__36431;
i__36411_36415 = G__36432;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__36402_SHARP_,p2__36403_SHARP_){return f.call(null,p1__36402_SHARP_,p2__36403_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__36434 = list_thing;if(G__36434)
{var bit__4050__auto__ = (G__36434.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36434.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36434.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36434);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36434);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__36435 = content;if(G__36435)
{var bit__4050__auto__ = (G__36435.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36435.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36435.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36435);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36435);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__36436 = content;if(G__36436)
{var bit__4050__auto__ = (G__36436.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36436.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36436.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36436);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36436);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
