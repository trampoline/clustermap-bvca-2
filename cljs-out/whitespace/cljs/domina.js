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
var opt_wrapper_39100 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_39101 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_39102 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_39101,table_section_wrapper_39101,opt_wrapper_39100,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_39102,table_section_wrapper_39101,cell_wrapper_39102,opt_wrapper_39100,table_section_wrapper_39101,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_39101]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__39107 = cljs.core.seq.call(null,tbody);var chunk__39108 = null;var count__39109 = 0;var i__39110 = 0;while(true){
if((i__39110 < count__39109))
{var child = cljs.core._nth.call(null,chunk__39108,i__39110);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39111 = seq__39107;
var G__39112 = chunk__39108;
var G__39113 = count__39109;
var G__39114 = (i__39110 + 1);
seq__39107 = G__39111;
chunk__39108 = G__39112;
count__39109 = G__39113;
i__39110 = G__39114;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39107);if(temp__4092__auto__)
{var seq__39107__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39107__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__39107__$1);{
var G__39115 = cljs.core.chunk_rest.call(null,seq__39107__$1);
var G__39116 = c__4148__auto__;
var G__39117 = cljs.core.count.call(null,c__4148__auto__);
var G__39118 = 0;
seq__39107 = G__39115;
chunk__39108 = G__39116;
count__39109 = G__39117;
i__39110 = G__39118;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__39107__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39119 = cljs.core.next.call(null,seq__39107__$1);
var G__39120 = null;
var G__39121 = 0;
var G__39122 = 0;
seq__39107 = G__39119;
chunk__39108 = G__39120;
count__39109 = G__39121;
i__39110 = G__39122;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__39124 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__39124,0,null);var start_wrap = cljs.core.nth.call(null,vec__39124,1,null);var end_wrap = cljs.core.nth.call(null,vec__39124,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__39125 = wrapper.lastChild;
var G__39126 = (level - 1);
wrapper = G__39125;
level = G__39126;
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
domina.DomContent = (function (){var obj39128 = {};return obj39128;
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
log_debug.cljs$lang$applyTo = (function (arglist__39129){
var mesg = cljs.core.seq(arglist__39129);
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
log.cljs$lang$applyTo = (function (arglist__39130){
var mesg = cljs.core.seq(arglist__39130);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__39131){
var contents = cljs.core.seq(arglist__39131);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__39132_SHARP_){return p1__39132_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__39133_SHARP_,p2__39134_SHARP_){return goog.dom.insertChildAt(p1__39133_SHARP_,p2__39134_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__39136_SHARP_,p2__39135_SHARP_){return goog.dom.insertSiblingBefore(p2__39135_SHARP_,p1__39136_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__39138_SHARP_,p2__39137_SHARP_){return goog.dom.insertSiblingAfter(p2__39137_SHARP_,p1__39138_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__39140_SHARP_,p2__39139_SHARP_){return goog.dom.replaceNode(p2__39139_SHARP_,p1__39140_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__39145_39149 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39146_39150 = null;var count__39147_39151 = 0;var i__39148_39152 = 0;while(true){
if((i__39148_39152 < count__39147_39151))
{var n_39153 = cljs.core._nth.call(null,chunk__39146_39150,i__39148_39152);goog.style.setStyle(n_39153,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__39154 = seq__39145_39149;
var G__39155 = chunk__39146_39150;
var G__39156 = count__39147_39151;
var G__39157 = (i__39148_39152 + 1);
seq__39145_39149 = G__39154;
chunk__39146_39150 = G__39155;
count__39147_39151 = G__39156;
i__39148_39152 = G__39157;
continue;
}
} else
{var temp__4092__auto___39158 = cljs.core.seq.call(null,seq__39145_39149);if(temp__4092__auto___39158)
{var seq__39145_39159__$1 = temp__4092__auto___39158;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39145_39159__$1))
{var c__4148__auto___39160 = cljs.core.chunk_first.call(null,seq__39145_39159__$1);{
var G__39161 = cljs.core.chunk_rest.call(null,seq__39145_39159__$1);
var G__39162 = c__4148__auto___39160;
var G__39163 = cljs.core.count.call(null,c__4148__auto___39160);
var G__39164 = 0;
seq__39145_39149 = G__39161;
chunk__39146_39150 = G__39162;
count__39147_39151 = G__39163;
i__39148_39152 = G__39164;
continue;
}
} else
{var n_39165 = cljs.core.first.call(null,seq__39145_39159__$1);goog.style.setStyle(n_39165,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__39166 = cljs.core.next.call(null,seq__39145_39159__$1);
var G__39167 = null;
var G__39168 = 0;
var G__39169 = 0;
seq__39145_39149 = G__39166;
chunk__39146_39150 = G__39167;
count__39147_39151 = G__39168;
i__39148_39152 = G__39169;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__39170){
var content = cljs.core.first(arglist__39170);
arglist__39170 = cljs.core.next(arglist__39170);
var name = cljs.core.first(arglist__39170);
var value = cljs.core.rest(arglist__39170);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__39175_39179 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39176_39180 = null;var count__39177_39181 = 0;var i__39178_39182 = 0;while(true){
if((i__39178_39182 < count__39177_39181))
{var n_39183 = cljs.core._nth.call(null,chunk__39176_39180,i__39178_39182);n_39183.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__39184 = seq__39175_39179;
var G__39185 = chunk__39176_39180;
var G__39186 = count__39177_39181;
var G__39187 = (i__39178_39182 + 1);
seq__39175_39179 = G__39184;
chunk__39176_39180 = G__39185;
count__39177_39181 = G__39186;
i__39178_39182 = G__39187;
continue;
}
} else
{var temp__4092__auto___39188 = cljs.core.seq.call(null,seq__39175_39179);if(temp__4092__auto___39188)
{var seq__39175_39189__$1 = temp__4092__auto___39188;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39175_39189__$1))
{var c__4148__auto___39190 = cljs.core.chunk_first.call(null,seq__39175_39189__$1);{
var G__39191 = cljs.core.chunk_rest.call(null,seq__39175_39189__$1);
var G__39192 = c__4148__auto___39190;
var G__39193 = cljs.core.count.call(null,c__4148__auto___39190);
var G__39194 = 0;
seq__39175_39179 = G__39191;
chunk__39176_39180 = G__39192;
count__39177_39181 = G__39193;
i__39178_39182 = G__39194;
continue;
}
} else
{var n_39195 = cljs.core.first.call(null,seq__39175_39189__$1);n_39195.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__39196 = cljs.core.next.call(null,seq__39175_39189__$1);
var G__39197 = null;
var G__39198 = 0;
var G__39199 = 0;
seq__39175_39179 = G__39196;
chunk__39176_39180 = G__39197;
count__39177_39181 = G__39198;
i__39178_39182 = G__39199;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__39200){
var content = cljs.core.first(arglist__39200);
arglist__39200 = cljs.core.next(arglist__39200);
var name = cljs.core.first(arglist__39200);
var value = cljs.core.rest(arglist__39200);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__39205_39209 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39206_39210 = null;var count__39207_39211 = 0;var i__39208_39212 = 0;while(true){
if((i__39208_39212 < count__39207_39211))
{var n_39213 = cljs.core._nth.call(null,chunk__39206_39210,i__39208_39212);n_39213.removeAttribute(cljs.core.name.call(null,name));
{
var G__39214 = seq__39205_39209;
var G__39215 = chunk__39206_39210;
var G__39216 = count__39207_39211;
var G__39217 = (i__39208_39212 + 1);
seq__39205_39209 = G__39214;
chunk__39206_39210 = G__39215;
count__39207_39211 = G__39216;
i__39208_39212 = G__39217;
continue;
}
} else
{var temp__4092__auto___39218 = cljs.core.seq.call(null,seq__39205_39209);if(temp__4092__auto___39218)
{var seq__39205_39219__$1 = temp__4092__auto___39218;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39205_39219__$1))
{var c__4148__auto___39220 = cljs.core.chunk_first.call(null,seq__39205_39219__$1);{
var G__39221 = cljs.core.chunk_rest.call(null,seq__39205_39219__$1);
var G__39222 = c__4148__auto___39220;
var G__39223 = cljs.core.count.call(null,c__4148__auto___39220);
var G__39224 = 0;
seq__39205_39209 = G__39221;
chunk__39206_39210 = G__39222;
count__39207_39211 = G__39223;
i__39208_39212 = G__39224;
continue;
}
} else
{var n_39225 = cljs.core.first.call(null,seq__39205_39219__$1);n_39225.removeAttribute(cljs.core.name.call(null,name));
{
var G__39226 = cljs.core.next.call(null,seq__39205_39219__$1);
var G__39227 = null;
var G__39228 = 0;
var G__39229 = 0;
seq__39205_39209 = G__39226;
chunk__39206_39210 = G__39227;
count__39207_39211 = G__39228;
i__39208_39212 = G__39229;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__39231 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__39231,0,null);var v = cljs.core.nth.call(null,vec__39231,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__39232_SHARP_){var attr = attrs__$1.item(p1__39232_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__39239_39245 = cljs.core.seq.call(null,styles);var chunk__39240_39246 = null;var count__39241_39247 = 0;var i__39242_39248 = 0;while(true){
if((i__39242_39248 < count__39241_39247))
{var vec__39243_39249 = cljs.core._nth.call(null,chunk__39240_39246,i__39242_39248);var name_39250 = cljs.core.nth.call(null,vec__39243_39249,0,null);var value_39251 = cljs.core.nth.call(null,vec__39243_39249,1,null);domina.set_style_BANG_.call(null,content,name_39250,value_39251);
{
var G__39252 = seq__39239_39245;
var G__39253 = chunk__39240_39246;
var G__39254 = count__39241_39247;
var G__39255 = (i__39242_39248 + 1);
seq__39239_39245 = G__39252;
chunk__39240_39246 = G__39253;
count__39241_39247 = G__39254;
i__39242_39248 = G__39255;
continue;
}
} else
{var temp__4092__auto___39256 = cljs.core.seq.call(null,seq__39239_39245);if(temp__4092__auto___39256)
{var seq__39239_39257__$1 = temp__4092__auto___39256;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39239_39257__$1))
{var c__4148__auto___39258 = cljs.core.chunk_first.call(null,seq__39239_39257__$1);{
var G__39259 = cljs.core.chunk_rest.call(null,seq__39239_39257__$1);
var G__39260 = c__4148__auto___39258;
var G__39261 = cljs.core.count.call(null,c__4148__auto___39258);
var G__39262 = 0;
seq__39239_39245 = G__39259;
chunk__39240_39246 = G__39260;
count__39241_39247 = G__39261;
i__39242_39248 = G__39262;
continue;
}
} else
{var vec__39244_39263 = cljs.core.first.call(null,seq__39239_39257__$1);var name_39264 = cljs.core.nth.call(null,vec__39244_39263,0,null);var value_39265 = cljs.core.nth.call(null,vec__39244_39263,1,null);domina.set_style_BANG_.call(null,content,name_39264,value_39265);
{
var G__39266 = cljs.core.next.call(null,seq__39239_39257__$1);
var G__39267 = null;
var G__39268 = 0;
var G__39269 = 0;
seq__39239_39245 = G__39266;
chunk__39240_39246 = G__39267;
count__39241_39247 = G__39268;
i__39242_39248 = G__39269;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__39276_39282 = cljs.core.seq.call(null,attrs);var chunk__39277_39283 = null;var count__39278_39284 = 0;var i__39279_39285 = 0;while(true){
if((i__39279_39285 < count__39278_39284))
{var vec__39280_39286 = cljs.core._nth.call(null,chunk__39277_39283,i__39279_39285);var name_39287 = cljs.core.nth.call(null,vec__39280_39286,0,null);var value_39288 = cljs.core.nth.call(null,vec__39280_39286,1,null);domina.set_attr_BANG_.call(null,content,name_39287,value_39288);
{
var G__39289 = seq__39276_39282;
var G__39290 = chunk__39277_39283;
var G__39291 = count__39278_39284;
var G__39292 = (i__39279_39285 + 1);
seq__39276_39282 = G__39289;
chunk__39277_39283 = G__39290;
count__39278_39284 = G__39291;
i__39279_39285 = G__39292;
continue;
}
} else
{var temp__4092__auto___39293 = cljs.core.seq.call(null,seq__39276_39282);if(temp__4092__auto___39293)
{var seq__39276_39294__$1 = temp__4092__auto___39293;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39276_39294__$1))
{var c__4148__auto___39295 = cljs.core.chunk_first.call(null,seq__39276_39294__$1);{
var G__39296 = cljs.core.chunk_rest.call(null,seq__39276_39294__$1);
var G__39297 = c__4148__auto___39295;
var G__39298 = cljs.core.count.call(null,c__4148__auto___39295);
var G__39299 = 0;
seq__39276_39282 = G__39296;
chunk__39277_39283 = G__39297;
count__39278_39284 = G__39298;
i__39279_39285 = G__39299;
continue;
}
} else
{var vec__39281_39300 = cljs.core.first.call(null,seq__39276_39294__$1);var name_39301 = cljs.core.nth.call(null,vec__39281_39300,0,null);var value_39302 = cljs.core.nth.call(null,vec__39281_39300,1,null);domina.set_attr_BANG_.call(null,content,name_39301,value_39302);
{
var G__39303 = cljs.core.next.call(null,seq__39276_39294__$1);
var G__39304 = null;
var G__39305 = 0;
var G__39306 = 0;
seq__39276_39282 = G__39303;
chunk__39277_39283 = G__39304;
count__39278_39284 = G__39305;
i__39279_39285 = G__39306;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__39311_39315 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39312_39316 = null;var count__39313_39317 = 0;var i__39314_39318 = 0;while(true){
if((i__39314_39318 < count__39313_39317))
{var node_39319 = cljs.core._nth.call(null,chunk__39312_39316,i__39314_39318);goog.dom.classes.add(node_39319,class$);
{
var G__39320 = seq__39311_39315;
var G__39321 = chunk__39312_39316;
var G__39322 = count__39313_39317;
var G__39323 = (i__39314_39318 + 1);
seq__39311_39315 = G__39320;
chunk__39312_39316 = G__39321;
count__39313_39317 = G__39322;
i__39314_39318 = G__39323;
continue;
}
} else
{var temp__4092__auto___39324 = cljs.core.seq.call(null,seq__39311_39315);if(temp__4092__auto___39324)
{var seq__39311_39325__$1 = temp__4092__auto___39324;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39311_39325__$1))
{var c__4148__auto___39326 = cljs.core.chunk_first.call(null,seq__39311_39325__$1);{
var G__39327 = cljs.core.chunk_rest.call(null,seq__39311_39325__$1);
var G__39328 = c__4148__auto___39326;
var G__39329 = cljs.core.count.call(null,c__4148__auto___39326);
var G__39330 = 0;
seq__39311_39315 = G__39327;
chunk__39312_39316 = G__39328;
count__39313_39317 = G__39329;
i__39314_39318 = G__39330;
continue;
}
} else
{var node_39331 = cljs.core.first.call(null,seq__39311_39325__$1);goog.dom.classes.add(node_39331,class$);
{
var G__39332 = cljs.core.next.call(null,seq__39311_39325__$1);
var G__39333 = null;
var G__39334 = 0;
var G__39335 = 0;
seq__39311_39315 = G__39332;
chunk__39312_39316 = G__39333;
count__39313_39317 = G__39334;
i__39314_39318 = G__39335;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__39340_39344 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39341_39345 = null;var count__39342_39346 = 0;var i__39343_39347 = 0;while(true){
if((i__39343_39347 < count__39342_39346))
{var node_39348 = cljs.core._nth.call(null,chunk__39341_39345,i__39343_39347);goog.dom.classes.remove(node_39348,class$);
{
var G__39349 = seq__39340_39344;
var G__39350 = chunk__39341_39345;
var G__39351 = count__39342_39346;
var G__39352 = (i__39343_39347 + 1);
seq__39340_39344 = G__39349;
chunk__39341_39345 = G__39350;
count__39342_39346 = G__39351;
i__39343_39347 = G__39352;
continue;
}
} else
{var temp__4092__auto___39353 = cljs.core.seq.call(null,seq__39340_39344);if(temp__4092__auto___39353)
{var seq__39340_39354__$1 = temp__4092__auto___39353;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39340_39354__$1))
{var c__4148__auto___39355 = cljs.core.chunk_first.call(null,seq__39340_39354__$1);{
var G__39356 = cljs.core.chunk_rest.call(null,seq__39340_39354__$1);
var G__39357 = c__4148__auto___39355;
var G__39358 = cljs.core.count.call(null,c__4148__auto___39355);
var G__39359 = 0;
seq__39340_39344 = G__39356;
chunk__39341_39345 = G__39357;
count__39342_39346 = G__39358;
i__39343_39347 = G__39359;
continue;
}
} else
{var node_39360 = cljs.core.first.call(null,seq__39340_39354__$1);goog.dom.classes.remove(node_39360,class$);
{
var G__39361 = cljs.core.next.call(null,seq__39340_39354__$1);
var G__39362 = null;
var G__39363 = 0;
var G__39364 = 0;
seq__39340_39344 = G__39361;
chunk__39341_39345 = G__39362;
count__39342_39346 = G__39363;
i__39343_39347 = G__39364;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__39369_39373 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39370_39374 = null;var count__39371_39375 = 0;var i__39372_39376 = 0;while(true){
if((i__39372_39376 < count__39371_39375))
{var node_39377 = cljs.core._nth.call(null,chunk__39370_39374,i__39372_39376);goog.dom.classes.toggle(node_39377,class$);
{
var G__39378 = seq__39369_39373;
var G__39379 = chunk__39370_39374;
var G__39380 = count__39371_39375;
var G__39381 = (i__39372_39376 + 1);
seq__39369_39373 = G__39378;
chunk__39370_39374 = G__39379;
count__39371_39375 = G__39380;
i__39372_39376 = G__39381;
continue;
}
} else
{var temp__4092__auto___39382 = cljs.core.seq.call(null,seq__39369_39373);if(temp__4092__auto___39382)
{var seq__39369_39383__$1 = temp__4092__auto___39382;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39369_39383__$1))
{var c__4148__auto___39384 = cljs.core.chunk_first.call(null,seq__39369_39383__$1);{
var G__39385 = cljs.core.chunk_rest.call(null,seq__39369_39383__$1);
var G__39386 = c__4148__auto___39384;
var G__39387 = cljs.core.count.call(null,c__4148__auto___39384);
var G__39388 = 0;
seq__39369_39373 = G__39385;
chunk__39370_39374 = G__39386;
count__39371_39375 = G__39387;
i__39372_39376 = G__39388;
continue;
}
} else
{var node_39389 = cljs.core.first.call(null,seq__39369_39383__$1);goog.dom.classes.toggle(node_39389,class$);
{
var G__39390 = cljs.core.next.call(null,seq__39369_39383__$1);
var G__39391 = null;
var G__39392 = 0;
var G__39393 = 0;
seq__39369_39373 = G__39390;
chunk__39370_39374 = G__39391;
count__39371_39375 = G__39392;
i__39372_39376 = G__39393;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_39402__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__39398_39403 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39399_39404 = null;var count__39400_39405 = 0;var i__39401_39406 = 0;while(true){
if((i__39401_39406 < count__39400_39405))
{var node_39407 = cljs.core._nth.call(null,chunk__39399_39404,i__39401_39406);goog.dom.classes.set(node_39407,classes_39402__$1);
{
var G__39408 = seq__39398_39403;
var G__39409 = chunk__39399_39404;
var G__39410 = count__39400_39405;
var G__39411 = (i__39401_39406 + 1);
seq__39398_39403 = G__39408;
chunk__39399_39404 = G__39409;
count__39400_39405 = G__39410;
i__39401_39406 = G__39411;
continue;
}
} else
{var temp__4092__auto___39412 = cljs.core.seq.call(null,seq__39398_39403);if(temp__4092__auto___39412)
{var seq__39398_39413__$1 = temp__4092__auto___39412;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39398_39413__$1))
{var c__4148__auto___39414 = cljs.core.chunk_first.call(null,seq__39398_39413__$1);{
var G__39415 = cljs.core.chunk_rest.call(null,seq__39398_39413__$1);
var G__39416 = c__4148__auto___39414;
var G__39417 = cljs.core.count.call(null,c__4148__auto___39414);
var G__39418 = 0;
seq__39398_39403 = G__39415;
chunk__39399_39404 = G__39416;
count__39400_39405 = G__39417;
i__39401_39406 = G__39418;
continue;
}
} else
{var node_39419 = cljs.core.first.call(null,seq__39398_39413__$1);goog.dom.classes.set(node_39419,classes_39402__$1);
{
var G__39420 = cljs.core.next.call(null,seq__39398_39413__$1);
var G__39421 = null;
var G__39422 = 0;
var G__39423 = 0;
seq__39398_39403 = G__39420;
chunk__39399_39404 = G__39421;
count__39400_39405 = G__39422;
i__39401_39406 = G__39423;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__39428_39432 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39429_39433 = null;var count__39430_39434 = 0;var i__39431_39435 = 0;while(true){
if((i__39431_39435 < count__39430_39434))
{var node_39436 = cljs.core._nth.call(null,chunk__39429_39433,i__39431_39435);goog.dom.setTextContent(node_39436,value);
{
var G__39437 = seq__39428_39432;
var G__39438 = chunk__39429_39433;
var G__39439 = count__39430_39434;
var G__39440 = (i__39431_39435 + 1);
seq__39428_39432 = G__39437;
chunk__39429_39433 = G__39438;
count__39430_39434 = G__39439;
i__39431_39435 = G__39440;
continue;
}
} else
{var temp__4092__auto___39441 = cljs.core.seq.call(null,seq__39428_39432);if(temp__4092__auto___39441)
{var seq__39428_39442__$1 = temp__4092__auto___39441;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39428_39442__$1))
{var c__4148__auto___39443 = cljs.core.chunk_first.call(null,seq__39428_39442__$1);{
var G__39444 = cljs.core.chunk_rest.call(null,seq__39428_39442__$1);
var G__39445 = c__4148__auto___39443;
var G__39446 = cljs.core.count.call(null,c__4148__auto___39443);
var G__39447 = 0;
seq__39428_39432 = G__39444;
chunk__39429_39433 = G__39445;
count__39430_39434 = G__39446;
i__39431_39435 = G__39447;
continue;
}
} else
{var node_39448 = cljs.core.first.call(null,seq__39428_39442__$1);goog.dom.setTextContent(node_39448,value);
{
var G__39449 = cljs.core.next.call(null,seq__39428_39442__$1);
var G__39450 = null;
var G__39451 = 0;
var G__39452 = 0;
seq__39428_39432 = G__39449;
chunk__39429_39433 = G__39450;
count__39430_39434 = G__39451;
i__39431_39435 = G__39452;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__39457_39461 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39458_39462 = null;var count__39459_39463 = 0;var i__39460_39464 = 0;while(true){
if((i__39460_39464 < count__39459_39463))
{var node_39465 = cljs.core._nth.call(null,chunk__39458_39462,i__39460_39464);goog.dom.forms.setValue(node_39465,value);
{
var G__39466 = seq__39457_39461;
var G__39467 = chunk__39458_39462;
var G__39468 = count__39459_39463;
var G__39469 = (i__39460_39464 + 1);
seq__39457_39461 = G__39466;
chunk__39458_39462 = G__39467;
count__39459_39463 = G__39468;
i__39460_39464 = G__39469;
continue;
}
} else
{var temp__4092__auto___39470 = cljs.core.seq.call(null,seq__39457_39461);if(temp__4092__auto___39470)
{var seq__39457_39471__$1 = temp__4092__auto___39470;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39457_39471__$1))
{var c__4148__auto___39472 = cljs.core.chunk_first.call(null,seq__39457_39471__$1);{
var G__39473 = cljs.core.chunk_rest.call(null,seq__39457_39471__$1);
var G__39474 = c__4148__auto___39472;
var G__39475 = cljs.core.count.call(null,c__4148__auto___39472);
var G__39476 = 0;
seq__39457_39461 = G__39473;
chunk__39458_39462 = G__39474;
count__39459_39463 = G__39475;
i__39460_39464 = G__39476;
continue;
}
} else
{var node_39477 = cljs.core.first.call(null,seq__39457_39471__$1);goog.dom.forms.setValue(node_39477,value);
{
var G__39478 = cljs.core.next.call(null,seq__39457_39471__$1);
var G__39479 = null;
var G__39480 = 0;
var G__39481 = 0;
seq__39457_39461 = G__39478;
chunk__39458_39462 = G__39479;
count__39459_39463 = G__39480;
i__39460_39464 = G__39481;
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
{var value_39492 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__39488_39493 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39489_39494 = null;var count__39490_39495 = 0;var i__39491_39496 = 0;while(true){
if((i__39491_39496 < count__39490_39495))
{var node_39497 = cljs.core._nth.call(null,chunk__39489_39494,i__39491_39496);node_39497.innerHTML = value_39492;
{
var G__39498 = seq__39488_39493;
var G__39499 = chunk__39489_39494;
var G__39500 = count__39490_39495;
var G__39501 = (i__39491_39496 + 1);
seq__39488_39493 = G__39498;
chunk__39489_39494 = G__39499;
count__39490_39495 = G__39500;
i__39491_39496 = G__39501;
continue;
}
} else
{var temp__4092__auto___39502 = cljs.core.seq.call(null,seq__39488_39493);if(temp__4092__auto___39502)
{var seq__39488_39503__$1 = temp__4092__auto___39502;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39488_39503__$1))
{var c__4148__auto___39504 = cljs.core.chunk_first.call(null,seq__39488_39503__$1);{
var G__39505 = cljs.core.chunk_rest.call(null,seq__39488_39503__$1);
var G__39506 = c__4148__auto___39504;
var G__39507 = cljs.core.count.call(null,c__4148__auto___39504);
var G__39508 = 0;
seq__39488_39493 = G__39505;
chunk__39489_39494 = G__39506;
count__39490_39495 = G__39507;
i__39491_39496 = G__39508;
continue;
}
} else
{var node_39509 = cljs.core.first.call(null,seq__39488_39503__$1);node_39509.innerHTML = value_39492;
{
var G__39510 = cljs.core.next.call(null,seq__39488_39503__$1);
var G__39511 = null;
var G__39512 = 0;
var G__39513 = 0;
seq__39488_39493 = G__39510;
chunk__39489_39494 = G__39511;
count__39490_39495 = G__39512;
i__39491_39496 = G__39513;
continue;
}
}
} else
{}
}
break;
}
}catch (e39487){if((e39487 instanceof Error))
{var e_39514 = e39487;domina.replace_children_BANG_.call(null,content,value_39492);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39487;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__39521_39525 = cljs.core.seq.call(null,children);var chunk__39522_39526 = null;var count__39523_39527 = 0;var i__39524_39528 = 0;while(true){
if((i__39524_39528 < count__39523_39527))
{var child_39529 = cljs.core._nth.call(null,chunk__39522_39526,i__39524_39528);frag.appendChild(child_39529);
{
var G__39530 = seq__39521_39525;
var G__39531 = chunk__39522_39526;
var G__39532 = count__39523_39527;
var G__39533 = (i__39524_39528 + 1);
seq__39521_39525 = G__39530;
chunk__39522_39526 = G__39531;
count__39523_39527 = G__39532;
i__39524_39528 = G__39533;
continue;
}
} else
{var temp__4092__auto___39534 = cljs.core.seq.call(null,seq__39521_39525);if(temp__4092__auto___39534)
{var seq__39521_39535__$1 = temp__4092__auto___39534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39521_39535__$1))
{var c__4148__auto___39536 = cljs.core.chunk_first.call(null,seq__39521_39535__$1);{
var G__39537 = cljs.core.chunk_rest.call(null,seq__39521_39535__$1);
var G__39538 = c__4148__auto___39536;
var G__39539 = cljs.core.count.call(null,c__4148__auto___39536);
var G__39540 = 0;
seq__39521_39525 = G__39537;
chunk__39522_39526 = G__39538;
count__39523_39527 = G__39539;
i__39524_39528 = G__39540;
continue;
}
} else
{var child_39541 = cljs.core.first.call(null,seq__39521_39535__$1);frag.appendChild(child_39541);
{
var G__39542 = cljs.core.next.call(null,seq__39521_39535__$1);
var G__39543 = null;
var G__39544 = 0;
var G__39545 = 0;
seq__39521_39525 = G__39542;
chunk__39522_39526 = G__39543;
count__39523_39527 = G__39544;
i__39524_39528 = G__39545;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__39515_SHARP_,p2__39516_SHARP_){return f.call(null,p1__39515_SHARP_,p2__39516_SHARP_);
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
{if((function (){var G__39547 = list_thing;if(G__39547)
{var bit__4050__auto__ = (G__39547.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__39547.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39547.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39547);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39547);
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
{if((function (){var G__39548 = content;if(G__39548)
{var bit__4050__auto__ = (G__39548.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__39548.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39548.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39548);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39548);
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
{if((function (){var G__39549 = content;if(G__39549)
{var bit__4050__auto__ = (G__39549.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__39549.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39549.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39549);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39549);
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
