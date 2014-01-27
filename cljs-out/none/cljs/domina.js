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
var opt_wrapper_16092 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16093 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16094 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16093,table_section_wrapper_16093,opt_wrapper_16092,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16094,table_section_wrapper_16093,cell_wrapper_16094,opt_wrapper_16092,table_section_wrapper_16093,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16093]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16099 = cljs.core.seq.call(null,tbody);var chunk__16100 = null;var count__16101 = 0;var i__16102 = 0;while(true){
if((i__16102 < count__16101))
{var child = cljs.core._nth.call(null,chunk__16100,i__16102);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16103 = seq__16099;
var G__16104 = chunk__16100;
var G__16105 = count__16101;
var G__16106 = (i__16102 + 1);
seq__16099 = G__16103;
chunk__16100 = G__16104;
count__16101 = G__16105;
i__16102 = G__16106;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16099);if(temp__4092__auto__)
{var seq__16099__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16099__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16099__$1);{
var G__16107 = cljs.core.chunk_rest.call(null,seq__16099__$1);
var G__16108 = c__4148__auto__;
var G__16109 = cljs.core.count.call(null,c__4148__auto__);
var G__16110 = 0;
seq__16099 = G__16107;
chunk__16100 = G__16108;
count__16101 = G__16109;
i__16102 = G__16110;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16099__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16111 = cljs.core.next.call(null,seq__16099__$1);
var G__16112 = null;
var G__16113 = 0;
var G__16114 = 0;
seq__16099 = G__16111;
chunk__16100 = G__16112;
count__16101 = G__16113;
i__16102 = G__16114;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16116 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16116,0,null);var start_wrap = cljs.core.nth.call(null,vec__16116,1,null);var end_wrap = cljs.core.nth.call(null,vec__16116,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16117 = wrapper.lastChild;
var G__16118 = (level - 1);
wrapper = G__16117;
level = G__16118;
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
domina.DomContent = (function (){var obj16120 = {};return obj16120;
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
log_debug.cljs$lang$applyTo = (function (arglist__16121){
var mesg = cljs.core.seq(arglist__16121);
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
log.cljs$lang$applyTo = (function (arglist__16122){
var mesg = cljs.core.seq(arglist__16122);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16123){
var contents = cljs.core.seq(arglist__16123);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16124_SHARP_){return p1__16124_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16125_SHARP_,p2__16126_SHARP_){return goog.dom.insertChildAt(p1__16125_SHARP_,p2__16126_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16128_SHARP_,p2__16127_SHARP_){return goog.dom.insertSiblingBefore(p2__16127_SHARP_,p1__16128_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16130_SHARP_,p2__16129_SHARP_){return goog.dom.insertSiblingAfter(p2__16129_SHARP_,p1__16130_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16132_SHARP_,p2__16131_SHARP_){return goog.dom.replaceNode(p2__16131_SHARP_,p1__16132_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16137_16141 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16138_16142 = null;var count__16139_16143 = 0;var i__16140_16144 = 0;while(true){
if((i__16140_16144 < count__16139_16143))
{var n_16145 = cljs.core._nth.call(null,chunk__16138_16142,i__16140_16144);goog.style.setStyle(n_16145,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16146 = seq__16137_16141;
var G__16147 = chunk__16138_16142;
var G__16148 = count__16139_16143;
var G__16149 = (i__16140_16144 + 1);
seq__16137_16141 = G__16146;
chunk__16138_16142 = G__16147;
count__16139_16143 = G__16148;
i__16140_16144 = G__16149;
continue;
}
} else
{var temp__4092__auto___16150 = cljs.core.seq.call(null,seq__16137_16141);if(temp__4092__auto___16150)
{var seq__16137_16151__$1 = temp__4092__auto___16150;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16137_16151__$1))
{var c__4148__auto___16152 = cljs.core.chunk_first.call(null,seq__16137_16151__$1);{
var G__16153 = cljs.core.chunk_rest.call(null,seq__16137_16151__$1);
var G__16154 = c__4148__auto___16152;
var G__16155 = cljs.core.count.call(null,c__4148__auto___16152);
var G__16156 = 0;
seq__16137_16141 = G__16153;
chunk__16138_16142 = G__16154;
count__16139_16143 = G__16155;
i__16140_16144 = G__16156;
continue;
}
} else
{var n_16157 = cljs.core.first.call(null,seq__16137_16151__$1);goog.style.setStyle(n_16157,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16158 = cljs.core.next.call(null,seq__16137_16151__$1);
var G__16159 = null;
var G__16160 = 0;
var G__16161 = 0;
seq__16137_16141 = G__16158;
chunk__16138_16142 = G__16159;
count__16139_16143 = G__16160;
i__16140_16144 = G__16161;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16162){
var content = cljs.core.first(arglist__16162);
arglist__16162 = cljs.core.next(arglist__16162);
var name = cljs.core.first(arglist__16162);
var value = cljs.core.rest(arglist__16162);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16167_16171 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16168_16172 = null;var count__16169_16173 = 0;var i__16170_16174 = 0;while(true){
if((i__16170_16174 < count__16169_16173))
{var n_16175 = cljs.core._nth.call(null,chunk__16168_16172,i__16170_16174);n_16175.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16176 = seq__16167_16171;
var G__16177 = chunk__16168_16172;
var G__16178 = count__16169_16173;
var G__16179 = (i__16170_16174 + 1);
seq__16167_16171 = G__16176;
chunk__16168_16172 = G__16177;
count__16169_16173 = G__16178;
i__16170_16174 = G__16179;
continue;
}
} else
{var temp__4092__auto___16180 = cljs.core.seq.call(null,seq__16167_16171);if(temp__4092__auto___16180)
{var seq__16167_16181__$1 = temp__4092__auto___16180;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16167_16181__$1))
{var c__4148__auto___16182 = cljs.core.chunk_first.call(null,seq__16167_16181__$1);{
var G__16183 = cljs.core.chunk_rest.call(null,seq__16167_16181__$1);
var G__16184 = c__4148__auto___16182;
var G__16185 = cljs.core.count.call(null,c__4148__auto___16182);
var G__16186 = 0;
seq__16167_16171 = G__16183;
chunk__16168_16172 = G__16184;
count__16169_16173 = G__16185;
i__16170_16174 = G__16186;
continue;
}
} else
{var n_16187 = cljs.core.first.call(null,seq__16167_16181__$1);n_16187.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16188 = cljs.core.next.call(null,seq__16167_16181__$1);
var G__16189 = null;
var G__16190 = 0;
var G__16191 = 0;
seq__16167_16171 = G__16188;
chunk__16168_16172 = G__16189;
count__16169_16173 = G__16190;
i__16170_16174 = G__16191;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16192){
var content = cljs.core.first(arglist__16192);
arglist__16192 = cljs.core.next(arglist__16192);
var name = cljs.core.first(arglist__16192);
var value = cljs.core.rest(arglist__16192);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16197_16201 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16198_16202 = null;var count__16199_16203 = 0;var i__16200_16204 = 0;while(true){
if((i__16200_16204 < count__16199_16203))
{var n_16205 = cljs.core._nth.call(null,chunk__16198_16202,i__16200_16204);n_16205.removeAttribute(cljs.core.name.call(null,name));
{
var G__16206 = seq__16197_16201;
var G__16207 = chunk__16198_16202;
var G__16208 = count__16199_16203;
var G__16209 = (i__16200_16204 + 1);
seq__16197_16201 = G__16206;
chunk__16198_16202 = G__16207;
count__16199_16203 = G__16208;
i__16200_16204 = G__16209;
continue;
}
} else
{var temp__4092__auto___16210 = cljs.core.seq.call(null,seq__16197_16201);if(temp__4092__auto___16210)
{var seq__16197_16211__$1 = temp__4092__auto___16210;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16197_16211__$1))
{var c__4148__auto___16212 = cljs.core.chunk_first.call(null,seq__16197_16211__$1);{
var G__16213 = cljs.core.chunk_rest.call(null,seq__16197_16211__$1);
var G__16214 = c__4148__auto___16212;
var G__16215 = cljs.core.count.call(null,c__4148__auto___16212);
var G__16216 = 0;
seq__16197_16201 = G__16213;
chunk__16198_16202 = G__16214;
count__16199_16203 = G__16215;
i__16200_16204 = G__16216;
continue;
}
} else
{var n_16217 = cljs.core.first.call(null,seq__16197_16211__$1);n_16217.removeAttribute(cljs.core.name.call(null,name));
{
var G__16218 = cljs.core.next.call(null,seq__16197_16211__$1);
var G__16219 = null;
var G__16220 = 0;
var G__16221 = 0;
seq__16197_16201 = G__16218;
chunk__16198_16202 = G__16219;
count__16199_16203 = G__16220;
i__16200_16204 = G__16221;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16223 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16223,0,null);var v = cljs.core.nth.call(null,vec__16223,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16224_SHARP_){var attr = attrs__$1.item(p1__16224_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16231_16237 = cljs.core.seq.call(null,styles);var chunk__16232_16238 = null;var count__16233_16239 = 0;var i__16234_16240 = 0;while(true){
if((i__16234_16240 < count__16233_16239))
{var vec__16235_16241 = cljs.core._nth.call(null,chunk__16232_16238,i__16234_16240);var name_16242 = cljs.core.nth.call(null,vec__16235_16241,0,null);var value_16243 = cljs.core.nth.call(null,vec__16235_16241,1,null);domina.set_style_BANG_.call(null,content,name_16242,value_16243);
{
var G__16244 = seq__16231_16237;
var G__16245 = chunk__16232_16238;
var G__16246 = count__16233_16239;
var G__16247 = (i__16234_16240 + 1);
seq__16231_16237 = G__16244;
chunk__16232_16238 = G__16245;
count__16233_16239 = G__16246;
i__16234_16240 = G__16247;
continue;
}
} else
{var temp__4092__auto___16248 = cljs.core.seq.call(null,seq__16231_16237);if(temp__4092__auto___16248)
{var seq__16231_16249__$1 = temp__4092__auto___16248;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16231_16249__$1))
{var c__4148__auto___16250 = cljs.core.chunk_first.call(null,seq__16231_16249__$1);{
var G__16251 = cljs.core.chunk_rest.call(null,seq__16231_16249__$1);
var G__16252 = c__4148__auto___16250;
var G__16253 = cljs.core.count.call(null,c__4148__auto___16250);
var G__16254 = 0;
seq__16231_16237 = G__16251;
chunk__16232_16238 = G__16252;
count__16233_16239 = G__16253;
i__16234_16240 = G__16254;
continue;
}
} else
{var vec__16236_16255 = cljs.core.first.call(null,seq__16231_16249__$1);var name_16256 = cljs.core.nth.call(null,vec__16236_16255,0,null);var value_16257 = cljs.core.nth.call(null,vec__16236_16255,1,null);domina.set_style_BANG_.call(null,content,name_16256,value_16257);
{
var G__16258 = cljs.core.next.call(null,seq__16231_16249__$1);
var G__16259 = null;
var G__16260 = 0;
var G__16261 = 0;
seq__16231_16237 = G__16258;
chunk__16232_16238 = G__16259;
count__16233_16239 = G__16260;
i__16234_16240 = G__16261;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16268_16274 = cljs.core.seq.call(null,attrs);var chunk__16269_16275 = null;var count__16270_16276 = 0;var i__16271_16277 = 0;while(true){
if((i__16271_16277 < count__16270_16276))
{var vec__16272_16278 = cljs.core._nth.call(null,chunk__16269_16275,i__16271_16277);var name_16279 = cljs.core.nth.call(null,vec__16272_16278,0,null);var value_16280 = cljs.core.nth.call(null,vec__16272_16278,1,null);domina.set_attr_BANG_.call(null,content,name_16279,value_16280);
{
var G__16281 = seq__16268_16274;
var G__16282 = chunk__16269_16275;
var G__16283 = count__16270_16276;
var G__16284 = (i__16271_16277 + 1);
seq__16268_16274 = G__16281;
chunk__16269_16275 = G__16282;
count__16270_16276 = G__16283;
i__16271_16277 = G__16284;
continue;
}
} else
{var temp__4092__auto___16285 = cljs.core.seq.call(null,seq__16268_16274);if(temp__4092__auto___16285)
{var seq__16268_16286__$1 = temp__4092__auto___16285;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16268_16286__$1))
{var c__4148__auto___16287 = cljs.core.chunk_first.call(null,seq__16268_16286__$1);{
var G__16288 = cljs.core.chunk_rest.call(null,seq__16268_16286__$1);
var G__16289 = c__4148__auto___16287;
var G__16290 = cljs.core.count.call(null,c__4148__auto___16287);
var G__16291 = 0;
seq__16268_16274 = G__16288;
chunk__16269_16275 = G__16289;
count__16270_16276 = G__16290;
i__16271_16277 = G__16291;
continue;
}
} else
{var vec__16273_16292 = cljs.core.first.call(null,seq__16268_16286__$1);var name_16293 = cljs.core.nth.call(null,vec__16273_16292,0,null);var value_16294 = cljs.core.nth.call(null,vec__16273_16292,1,null);domina.set_attr_BANG_.call(null,content,name_16293,value_16294);
{
var G__16295 = cljs.core.next.call(null,seq__16268_16286__$1);
var G__16296 = null;
var G__16297 = 0;
var G__16298 = 0;
seq__16268_16274 = G__16295;
chunk__16269_16275 = G__16296;
count__16270_16276 = G__16297;
i__16271_16277 = G__16298;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16303_16307 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16304_16308 = null;var count__16305_16309 = 0;var i__16306_16310 = 0;while(true){
if((i__16306_16310 < count__16305_16309))
{var node_16311 = cljs.core._nth.call(null,chunk__16304_16308,i__16306_16310);goog.dom.classes.add(node_16311,class$);
{
var G__16312 = seq__16303_16307;
var G__16313 = chunk__16304_16308;
var G__16314 = count__16305_16309;
var G__16315 = (i__16306_16310 + 1);
seq__16303_16307 = G__16312;
chunk__16304_16308 = G__16313;
count__16305_16309 = G__16314;
i__16306_16310 = G__16315;
continue;
}
} else
{var temp__4092__auto___16316 = cljs.core.seq.call(null,seq__16303_16307);if(temp__4092__auto___16316)
{var seq__16303_16317__$1 = temp__4092__auto___16316;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16303_16317__$1))
{var c__4148__auto___16318 = cljs.core.chunk_first.call(null,seq__16303_16317__$1);{
var G__16319 = cljs.core.chunk_rest.call(null,seq__16303_16317__$1);
var G__16320 = c__4148__auto___16318;
var G__16321 = cljs.core.count.call(null,c__4148__auto___16318);
var G__16322 = 0;
seq__16303_16307 = G__16319;
chunk__16304_16308 = G__16320;
count__16305_16309 = G__16321;
i__16306_16310 = G__16322;
continue;
}
} else
{var node_16323 = cljs.core.first.call(null,seq__16303_16317__$1);goog.dom.classes.add(node_16323,class$);
{
var G__16324 = cljs.core.next.call(null,seq__16303_16317__$1);
var G__16325 = null;
var G__16326 = 0;
var G__16327 = 0;
seq__16303_16307 = G__16324;
chunk__16304_16308 = G__16325;
count__16305_16309 = G__16326;
i__16306_16310 = G__16327;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16332_16336 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16333_16337 = null;var count__16334_16338 = 0;var i__16335_16339 = 0;while(true){
if((i__16335_16339 < count__16334_16338))
{var node_16340 = cljs.core._nth.call(null,chunk__16333_16337,i__16335_16339);goog.dom.classes.remove(node_16340,class$);
{
var G__16341 = seq__16332_16336;
var G__16342 = chunk__16333_16337;
var G__16343 = count__16334_16338;
var G__16344 = (i__16335_16339 + 1);
seq__16332_16336 = G__16341;
chunk__16333_16337 = G__16342;
count__16334_16338 = G__16343;
i__16335_16339 = G__16344;
continue;
}
} else
{var temp__4092__auto___16345 = cljs.core.seq.call(null,seq__16332_16336);if(temp__4092__auto___16345)
{var seq__16332_16346__$1 = temp__4092__auto___16345;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16332_16346__$1))
{var c__4148__auto___16347 = cljs.core.chunk_first.call(null,seq__16332_16346__$1);{
var G__16348 = cljs.core.chunk_rest.call(null,seq__16332_16346__$1);
var G__16349 = c__4148__auto___16347;
var G__16350 = cljs.core.count.call(null,c__4148__auto___16347);
var G__16351 = 0;
seq__16332_16336 = G__16348;
chunk__16333_16337 = G__16349;
count__16334_16338 = G__16350;
i__16335_16339 = G__16351;
continue;
}
} else
{var node_16352 = cljs.core.first.call(null,seq__16332_16346__$1);goog.dom.classes.remove(node_16352,class$);
{
var G__16353 = cljs.core.next.call(null,seq__16332_16346__$1);
var G__16354 = null;
var G__16355 = 0;
var G__16356 = 0;
seq__16332_16336 = G__16353;
chunk__16333_16337 = G__16354;
count__16334_16338 = G__16355;
i__16335_16339 = G__16356;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16361_16365 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16362_16366 = null;var count__16363_16367 = 0;var i__16364_16368 = 0;while(true){
if((i__16364_16368 < count__16363_16367))
{var node_16369 = cljs.core._nth.call(null,chunk__16362_16366,i__16364_16368);goog.dom.classes.toggle(node_16369,class$);
{
var G__16370 = seq__16361_16365;
var G__16371 = chunk__16362_16366;
var G__16372 = count__16363_16367;
var G__16373 = (i__16364_16368 + 1);
seq__16361_16365 = G__16370;
chunk__16362_16366 = G__16371;
count__16363_16367 = G__16372;
i__16364_16368 = G__16373;
continue;
}
} else
{var temp__4092__auto___16374 = cljs.core.seq.call(null,seq__16361_16365);if(temp__4092__auto___16374)
{var seq__16361_16375__$1 = temp__4092__auto___16374;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16361_16375__$1))
{var c__4148__auto___16376 = cljs.core.chunk_first.call(null,seq__16361_16375__$1);{
var G__16377 = cljs.core.chunk_rest.call(null,seq__16361_16375__$1);
var G__16378 = c__4148__auto___16376;
var G__16379 = cljs.core.count.call(null,c__4148__auto___16376);
var G__16380 = 0;
seq__16361_16365 = G__16377;
chunk__16362_16366 = G__16378;
count__16363_16367 = G__16379;
i__16364_16368 = G__16380;
continue;
}
} else
{var node_16381 = cljs.core.first.call(null,seq__16361_16375__$1);goog.dom.classes.toggle(node_16381,class$);
{
var G__16382 = cljs.core.next.call(null,seq__16361_16375__$1);
var G__16383 = null;
var G__16384 = 0;
var G__16385 = 0;
seq__16361_16365 = G__16382;
chunk__16362_16366 = G__16383;
count__16363_16367 = G__16384;
i__16364_16368 = G__16385;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16394__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16390_16395 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16391_16396 = null;var count__16392_16397 = 0;var i__16393_16398 = 0;while(true){
if((i__16393_16398 < count__16392_16397))
{var node_16399 = cljs.core._nth.call(null,chunk__16391_16396,i__16393_16398);goog.dom.classes.set(node_16399,classes_16394__$1);
{
var G__16400 = seq__16390_16395;
var G__16401 = chunk__16391_16396;
var G__16402 = count__16392_16397;
var G__16403 = (i__16393_16398 + 1);
seq__16390_16395 = G__16400;
chunk__16391_16396 = G__16401;
count__16392_16397 = G__16402;
i__16393_16398 = G__16403;
continue;
}
} else
{var temp__4092__auto___16404 = cljs.core.seq.call(null,seq__16390_16395);if(temp__4092__auto___16404)
{var seq__16390_16405__$1 = temp__4092__auto___16404;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16390_16405__$1))
{var c__4148__auto___16406 = cljs.core.chunk_first.call(null,seq__16390_16405__$1);{
var G__16407 = cljs.core.chunk_rest.call(null,seq__16390_16405__$1);
var G__16408 = c__4148__auto___16406;
var G__16409 = cljs.core.count.call(null,c__4148__auto___16406);
var G__16410 = 0;
seq__16390_16395 = G__16407;
chunk__16391_16396 = G__16408;
count__16392_16397 = G__16409;
i__16393_16398 = G__16410;
continue;
}
} else
{var node_16411 = cljs.core.first.call(null,seq__16390_16405__$1);goog.dom.classes.set(node_16411,classes_16394__$1);
{
var G__16412 = cljs.core.next.call(null,seq__16390_16405__$1);
var G__16413 = null;
var G__16414 = 0;
var G__16415 = 0;
seq__16390_16395 = G__16412;
chunk__16391_16396 = G__16413;
count__16392_16397 = G__16414;
i__16393_16398 = G__16415;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16420_16424 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16421_16425 = null;var count__16422_16426 = 0;var i__16423_16427 = 0;while(true){
if((i__16423_16427 < count__16422_16426))
{var node_16428 = cljs.core._nth.call(null,chunk__16421_16425,i__16423_16427);goog.dom.setTextContent(node_16428,value);
{
var G__16429 = seq__16420_16424;
var G__16430 = chunk__16421_16425;
var G__16431 = count__16422_16426;
var G__16432 = (i__16423_16427 + 1);
seq__16420_16424 = G__16429;
chunk__16421_16425 = G__16430;
count__16422_16426 = G__16431;
i__16423_16427 = G__16432;
continue;
}
} else
{var temp__4092__auto___16433 = cljs.core.seq.call(null,seq__16420_16424);if(temp__4092__auto___16433)
{var seq__16420_16434__$1 = temp__4092__auto___16433;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16420_16434__$1))
{var c__4148__auto___16435 = cljs.core.chunk_first.call(null,seq__16420_16434__$1);{
var G__16436 = cljs.core.chunk_rest.call(null,seq__16420_16434__$1);
var G__16437 = c__4148__auto___16435;
var G__16438 = cljs.core.count.call(null,c__4148__auto___16435);
var G__16439 = 0;
seq__16420_16424 = G__16436;
chunk__16421_16425 = G__16437;
count__16422_16426 = G__16438;
i__16423_16427 = G__16439;
continue;
}
} else
{var node_16440 = cljs.core.first.call(null,seq__16420_16434__$1);goog.dom.setTextContent(node_16440,value);
{
var G__16441 = cljs.core.next.call(null,seq__16420_16434__$1);
var G__16442 = null;
var G__16443 = 0;
var G__16444 = 0;
seq__16420_16424 = G__16441;
chunk__16421_16425 = G__16442;
count__16422_16426 = G__16443;
i__16423_16427 = G__16444;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16449_16453 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16450_16454 = null;var count__16451_16455 = 0;var i__16452_16456 = 0;while(true){
if((i__16452_16456 < count__16451_16455))
{var node_16457 = cljs.core._nth.call(null,chunk__16450_16454,i__16452_16456);goog.dom.forms.setValue(node_16457,value);
{
var G__16458 = seq__16449_16453;
var G__16459 = chunk__16450_16454;
var G__16460 = count__16451_16455;
var G__16461 = (i__16452_16456 + 1);
seq__16449_16453 = G__16458;
chunk__16450_16454 = G__16459;
count__16451_16455 = G__16460;
i__16452_16456 = G__16461;
continue;
}
} else
{var temp__4092__auto___16462 = cljs.core.seq.call(null,seq__16449_16453);if(temp__4092__auto___16462)
{var seq__16449_16463__$1 = temp__4092__auto___16462;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16449_16463__$1))
{var c__4148__auto___16464 = cljs.core.chunk_first.call(null,seq__16449_16463__$1);{
var G__16465 = cljs.core.chunk_rest.call(null,seq__16449_16463__$1);
var G__16466 = c__4148__auto___16464;
var G__16467 = cljs.core.count.call(null,c__4148__auto___16464);
var G__16468 = 0;
seq__16449_16453 = G__16465;
chunk__16450_16454 = G__16466;
count__16451_16455 = G__16467;
i__16452_16456 = G__16468;
continue;
}
} else
{var node_16469 = cljs.core.first.call(null,seq__16449_16463__$1);goog.dom.forms.setValue(node_16469,value);
{
var G__16470 = cljs.core.next.call(null,seq__16449_16463__$1);
var G__16471 = null;
var G__16472 = 0;
var G__16473 = 0;
seq__16449_16453 = G__16470;
chunk__16450_16454 = G__16471;
count__16451_16455 = G__16472;
i__16452_16456 = G__16473;
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
{var value_16484 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16480_16485 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16481_16486 = null;var count__16482_16487 = 0;var i__16483_16488 = 0;while(true){
if((i__16483_16488 < count__16482_16487))
{var node_16489 = cljs.core._nth.call(null,chunk__16481_16486,i__16483_16488);node_16489.innerHTML = value_16484;
{
var G__16490 = seq__16480_16485;
var G__16491 = chunk__16481_16486;
var G__16492 = count__16482_16487;
var G__16493 = (i__16483_16488 + 1);
seq__16480_16485 = G__16490;
chunk__16481_16486 = G__16491;
count__16482_16487 = G__16492;
i__16483_16488 = G__16493;
continue;
}
} else
{var temp__4092__auto___16494 = cljs.core.seq.call(null,seq__16480_16485);if(temp__4092__auto___16494)
{var seq__16480_16495__$1 = temp__4092__auto___16494;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16480_16495__$1))
{var c__4148__auto___16496 = cljs.core.chunk_first.call(null,seq__16480_16495__$1);{
var G__16497 = cljs.core.chunk_rest.call(null,seq__16480_16495__$1);
var G__16498 = c__4148__auto___16496;
var G__16499 = cljs.core.count.call(null,c__4148__auto___16496);
var G__16500 = 0;
seq__16480_16485 = G__16497;
chunk__16481_16486 = G__16498;
count__16482_16487 = G__16499;
i__16483_16488 = G__16500;
continue;
}
} else
{var node_16501 = cljs.core.first.call(null,seq__16480_16495__$1);node_16501.innerHTML = value_16484;
{
var G__16502 = cljs.core.next.call(null,seq__16480_16495__$1);
var G__16503 = null;
var G__16504 = 0;
var G__16505 = 0;
seq__16480_16485 = G__16502;
chunk__16481_16486 = G__16503;
count__16482_16487 = G__16504;
i__16483_16488 = G__16505;
continue;
}
}
} else
{}
}
break;
}
}catch (e16479){if((e16479 instanceof Error))
{var e_16506 = e16479;domina.replace_children_BANG_.call(null,content,value_16484);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16479;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__16513_16517 = cljs.core.seq.call(null,children);var chunk__16514_16518 = null;var count__16515_16519 = 0;var i__16516_16520 = 0;while(true){
if((i__16516_16520 < count__16515_16519))
{var child_16521 = cljs.core._nth.call(null,chunk__16514_16518,i__16516_16520);frag.appendChild(child_16521);
{
var G__16522 = seq__16513_16517;
var G__16523 = chunk__16514_16518;
var G__16524 = count__16515_16519;
var G__16525 = (i__16516_16520 + 1);
seq__16513_16517 = G__16522;
chunk__16514_16518 = G__16523;
count__16515_16519 = G__16524;
i__16516_16520 = G__16525;
continue;
}
} else
{var temp__4092__auto___16526 = cljs.core.seq.call(null,seq__16513_16517);if(temp__4092__auto___16526)
{var seq__16513_16527__$1 = temp__4092__auto___16526;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16513_16527__$1))
{var c__4148__auto___16528 = cljs.core.chunk_first.call(null,seq__16513_16527__$1);{
var G__16529 = cljs.core.chunk_rest.call(null,seq__16513_16527__$1);
var G__16530 = c__4148__auto___16528;
var G__16531 = cljs.core.count.call(null,c__4148__auto___16528);
var G__16532 = 0;
seq__16513_16517 = G__16529;
chunk__16514_16518 = G__16530;
count__16515_16519 = G__16531;
i__16516_16520 = G__16532;
continue;
}
} else
{var child_16533 = cljs.core.first.call(null,seq__16513_16527__$1);frag.appendChild(child_16533);
{
var G__16534 = cljs.core.next.call(null,seq__16513_16527__$1);
var G__16535 = null;
var G__16536 = 0;
var G__16537 = 0;
seq__16513_16517 = G__16534;
chunk__16514_16518 = G__16535;
count__16515_16519 = G__16536;
i__16516_16520 = G__16537;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16507_SHARP_,p2__16508_SHARP_){return f.call(null,p1__16507_SHARP_,p2__16508_SHARP_);
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
{if((function (){var G__16539 = list_thing;if(G__16539)
{var bit__4050__auto__ = (G__16539.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16539.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16539.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16539);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16539);
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
{if((function (){var G__16540 = content;if(G__16540)
{var bit__4050__auto__ = (G__16540.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16540.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16540.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16540);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16540);
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
{if((function (){var G__16541 = content;if(G__16541)
{var bit__4050__auto__ = (G__16541.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16541.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16541.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16541);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16541);
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

//# sourceMappingURL=domina.js.map