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
var opt_wrapper_56070 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_56071 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_56072 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_56072,opt_wrapper_56070,table_section_wrapper_56071,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_56070,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_56071,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_56071,cell_wrapper_56072,table_section_wrapper_56071,table_section_wrapper_56071]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3529__auto__ = div.firstChild;if(cljs.core.truth_(and__3529__auto__))
{return div.firstChild.childNodes;
} else
{return and__3529__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__56077 = cljs.core.seq.call(null,tbody);var chunk__56078 = null;var count__56079 = (0);var i__56080 = (0);while(true){
if((i__56080 < count__56079))
{var child = cljs.core._nth.call(null,chunk__56078,i__56080);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__56081 = seq__56077;
var G__56082 = chunk__56078;
var G__56083 = count__56079;
var G__56084 = (i__56080 + (1));
seq__56077 = G__56081;
chunk__56078 = G__56082;
count__56079 = G__56083;
i__56080 = G__56084;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__56077);if(temp__4126__auto__)
{var seq__56077__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56077__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__56077__$1);{
var G__56085 = cljs.core.chunk_rest.call(null,seq__56077__$1);
var G__56086 = c__4297__auto__;
var G__56087 = cljs.core.count.call(null,c__4297__auto__);
var G__56088 = (0);
seq__56077 = G__56085;
chunk__56078 = G__56086;
count__56079 = G__56087;
i__56080 = G__56088;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__56077__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__56089 = cljs.core.next.call(null,seq__56077__$1);
var G__56090 = null;
var G__56091 = (0);
var G__56092 = (0);
seq__56077 = G__56089;
chunk__56078 = G__56090;
count__56079 = G__56091;
i__56080 = G__56092;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__56094 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__56094,(0),null);var start_wrap = cljs.core.nth.call(null,vec__56094,(1),null);var end_wrap = cljs.core.nth.call(null,vec__56094,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__56095 = wrapper.lastChild;
var G__56096 = (level - (1));
wrapper = G__56095;
level = G__56096;
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
if(cljs.core.truth_((function (){var and__3529__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3529__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3529__auto__;
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
domina.DomContent = (function (){var obj56098 = {};return obj56098;
})();
domina.nodes = (function nodes(content){if((function (){var and__3529__auto__ = content;if(and__3529__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3529__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4168__auto__ = (((content == null))?null:content);return (function (){var or__3541__auto__ = (domina.nodes[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.nodes["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3529__auto__ = nodeseq;if(and__3529__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3529__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4168__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3541__auto__ = (domina.single_node[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.single_node["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3529__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3529__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3529__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__56099){
var mesg = cljs.core.seq(arglist__56099);
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
log.cljs$lang$applyTo = (function (arglist__56100){
var mesg = cljs.core.seq(arglist__56100);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__56101){
var contents = cljs.core.seq(arglist__56101);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__56102_SHARP_){return p1__56102_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__56103_SHARP_,p2__56104_SHARP_){return goog.dom.insertChildAt(p1__56103_SHARP_,p2__56104_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__56106_SHARP_,p2__56105_SHARP_){return goog.dom.insertSiblingBefore(p2__56105_SHARP_,p1__56106_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__56108_SHARP_,p2__56107_SHARP_){return goog.dom.insertSiblingAfter(p2__56107_SHARP_,p1__56108_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__56110_SHARP_,p2__56109_SHARP_){return goog.dom.replaceNode(p2__56109_SHARP_,p1__56110_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__56115_56119 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__56116_56120 = null;var count__56117_56121 = (0);var i__56118_56122 = (0);while(true){
if((i__56118_56122 < count__56117_56121))
{var n_56123 = cljs.core._nth.call(null,chunk__56116_56120,i__56118_56122);goog.style.setStyle(n_56123,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__56124 = seq__56115_56119;
var G__56125 = chunk__56116_56120;
var G__56126 = count__56117_56121;
var G__56127 = (i__56118_56122 + (1));
seq__56115_56119 = G__56124;
chunk__56116_56120 = G__56125;
count__56117_56121 = G__56126;
i__56118_56122 = G__56127;
continue;
}
} else
{var temp__4126__auto___56128 = cljs.core.seq.call(null,seq__56115_56119);if(temp__4126__auto___56128)
{var seq__56115_56129__$1 = temp__4126__auto___56128;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56115_56129__$1))
{var c__4297__auto___56130 = cljs.core.chunk_first.call(null,seq__56115_56129__$1);{
var G__56131 = cljs.core.chunk_rest.call(null,seq__56115_56129__$1);
var G__56132 = c__4297__auto___56130;
var G__56133 = cljs.core.count.call(null,c__4297__auto___56130);
var G__56134 = (0);
seq__56115_56119 = G__56131;
chunk__56116_56120 = G__56132;
count__56117_56121 = G__56133;
i__56118_56122 = G__56134;
continue;
}
} else
{var n_56135 = cljs.core.first.call(null,seq__56115_56129__$1);goog.style.setStyle(n_56135,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__56136 = cljs.core.next.call(null,seq__56115_56129__$1);
var G__56137 = null;
var G__56138 = (0);
var G__56139 = (0);
seq__56115_56119 = G__56136;
chunk__56116_56120 = G__56137;
count__56117_56121 = G__56138;
i__56118_56122 = G__56139;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__56140){
var content = cljs.core.first(arglist__56140);
arglist__56140 = cljs.core.next(arglist__56140);
var name = cljs.core.first(arglist__56140);
var value = cljs.core.rest(arglist__56140);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__56145_56149 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__56146_56150 = null;var count__56147_56151 = (0);var i__56148_56152 = (0);while(true){
if((i__56148_56152 < count__56147_56151))
{var n_56153 = cljs.core._nth.call(null,chunk__56146_56150,i__56148_56152);n_56153.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__56154 = seq__56145_56149;
var G__56155 = chunk__56146_56150;
var G__56156 = count__56147_56151;
var G__56157 = (i__56148_56152 + (1));
seq__56145_56149 = G__56154;
chunk__56146_56150 = G__56155;
count__56147_56151 = G__56156;
i__56148_56152 = G__56157;
continue;
}
} else
{var temp__4126__auto___56158 = cljs.core.seq.call(null,seq__56145_56149);if(temp__4126__auto___56158)
{var seq__56145_56159__$1 = temp__4126__auto___56158;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56145_56159__$1))
{var c__4297__auto___56160 = cljs.core.chunk_first.call(null,seq__56145_56159__$1);{
var G__56161 = cljs.core.chunk_rest.call(null,seq__56145_56159__$1);
var G__56162 = c__4297__auto___56160;
var G__56163 = cljs.core.count.call(null,c__4297__auto___56160);
var G__56164 = (0);
seq__56145_56149 = G__56161;
chunk__56146_56150 = G__56162;
count__56147_56151 = G__56163;
i__56148_56152 = G__56164;
continue;
}
} else
{var n_56165 = cljs.core.first.call(null,seq__56145_56159__$1);n_56165.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__56166 = cljs.core.next.call(null,seq__56145_56159__$1);
var G__56167 = null;
var G__56168 = (0);
var G__56169 = (0);
seq__56145_56149 = G__56166;
chunk__56146_56150 = G__56167;
count__56147_56151 = G__56168;
i__56148_56152 = G__56169;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__56170){
var content = cljs.core.first(arglist__56170);
arglist__56170 = cljs.core.next(arglist__56170);
var name = cljs.core.first(arglist__56170);
var value = cljs.core.rest(arglist__56170);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__56175_56179 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__56176_56180 = null;var count__56177_56181 = (0);var i__56178_56182 = (0);while(true){
if((i__56178_56182 < count__56177_56181))
{var n_56183 = cljs.core._nth.call(null,chunk__56176_56180,i__56178_56182);n_56183.removeAttribute(cljs.core.name.call(null,name));
{
var G__56184 = seq__56175_56179;
var G__56185 = chunk__56176_56180;
var G__56186 = count__56177_56181;
var G__56187 = (i__56178_56182 + (1));
seq__56175_56179 = G__56184;
chunk__56176_56180 = G__56185;
count__56177_56181 = G__56186;
i__56178_56182 = G__56187;
continue;
}
} else
{var temp__4126__auto___56188 = cljs.core.seq.call(null,seq__56175_56179);if(temp__4126__auto___56188)
{var seq__56175_56189__$1 = temp__4126__auto___56188;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56175_56189__$1))
{var c__4297__auto___56190 = cljs.core.chunk_first.call(null,seq__56175_56189__$1);{
var G__56191 = cljs.core.chunk_rest.call(null,seq__56175_56189__$1);
var G__56192 = c__4297__auto___56190;
var G__56193 = cljs.core.count.call(null,c__4297__auto___56190);
var G__56194 = (0);
seq__56175_56179 = G__56191;
chunk__56176_56180 = G__56192;
count__56177_56181 = G__56193;
i__56178_56182 = G__56194;
continue;
}
} else
{var n_56195 = cljs.core.first.call(null,seq__56175_56189__$1);n_56195.removeAttribute(cljs.core.name.call(null,name));
{
var G__56196 = cljs.core.next.call(null,seq__56175_56189__$1);
var G__56197 = null;
var G__56198 = (0);
var G__56199 = (0);
seq__56175_56179 = G__56196;
chunk__56176_56180 = G__56197;
count__56177_56181 = G__56198;
i__56178_56182 = G__56199;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__56201 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__56201,(0),null);var v = cljs.core.nth.call(null,vec__56201,(1),null);if(cljs.core.truth_((function (){var and__3529__auto__ = k;if(cljs.core.truth_(and__3529__auto__))
{return v;
} else
{return and__3529__auto__;
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
return (function (p1__56202_SHARP_){var attr = attrs__$1.item(p1__56202_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__56209_56215 = cljs.core.seq.call(null,styles);var chunk__56210_56216 = null;var count__56211_56217 = (0);var i__56212_56218 = (0);while(true){
if((i__56212_56218 < count__56211_56217))
{var vec__56213_56219 = cljs.core._nth.call(null,chunk__56210_56216,i__56212_56218);var name_56220 = cljs.core.nth.call(null,vec__56213_56219,(0),null);var value_56221 = cljs.core.nth.call(null,vec__56213_56219,(1),null);domina.set_style_BANG_.call(null,content,name_56220,value_56221);
{
var G__56222 = seq__56209_56215;
var G__56223 = chunk__56210_56216;
var G__56224 = count__56211_56217;
var G__56225 = (i__56212_56218 + (1));
seq__56209_56215 = G__56222;
chunk__56210_56216 = G__56223;
count__56211_56217 = G__56224;
i__56212_56218 = G__56225;
continue;
}
} else
{var temp__4126__auto___56226 = cljs.core.seq.call(null,seq__56209_56215);if(temp__4126__auto___56226)
{var seq__56209_56227__$1 = temp__4126__auto___56226;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56209_56227__$1))
{var c__4297__auto___56228 = cljs.core.chunk_first.call(null,seq__56209_56227__$1);{
var G__56229 = cljs.core.chunk_rest.call(null,seq__56209_56227__$1);
var G__56230 = c__4297__auto___56228;
var G__56231 = cljs.core.count.call(null,c__4297__auto___56228);
var G__56232 = (0);
seq__56209_56215 = G__56229;
chunk__56210_56216 = G__56230;
count__56211_56217 = G__56231;
i__56212_56218 = G__56232;
continue;
}
} else
{var vec__56214_56233 = cljs.core.first.call(null,seq__56209_56227__$1);var name_56234 = cljs.core.nth.call(null,vec__56214_56233,(0),null);var value_56235 = cljs.core.nth.call(null,vec__56214_56233,(1),null);domina.set_style_BANG_.call(null,content,name_56234,value_56235);
{
var G__56236 = cljs.core.next.call(null,seq__56209_56227__$1);
var G__56237 = null;
var G__56238 = (0);
var G__56239 = (0);
seq__56209_56215 = G__56236;
chunk__56210_56216 = G__56237;
count__56211_56217 = G__56238;
i__56212_56218 = G__56239;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__56246_56252 = cljs.core.seq.call(null,attrs);var chunk__56247_56253 = null;var count__56248_56254 = (0);var i__56249_56255 = (0);while(true){
if((i__56249_56255 < count__56248_56254))
{var vec__56250_56256 = cljs.core._nth.call(null,chunk__56247_56253,i__56249_56255);var name_56257 = cljs.core.nth.call(null,vec__56250_56256,(0),null);var value_56258 = cljs.core.nth.call(null,vec__56250_56256,(1),null);domina.set_attr_BANG_.call(null,content,name_56257,value_56258);
{
var G__56259 = seq__56246_56252;
var G__56260 = chunk__56247_56253;
var G__56261 = count__56248_56254;
var G__56262 = (i__56249_56255 + (1));
seq__56246_56252 = G__56259;
chunk__56247_56253 = G__56260;
count__56248_56254 = G__56261;
i__56249_56255 = G__56262;
continue;
}
} else
{var temp__4126__auto___56263 = cljs.core.seq.call(null,seq__56246_56252);if(temp__4126__auto___56263)
{var seq__56246_56264__$1 = temp__4126__auto___56263;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56246_56264__$1))
{var c__4297__auto___56265 = cljs.core.chunk_first.call(null,seq__56246_56264__$1);{
var G__56266 = cljs.core.chunk_rest.call(null,seq__56246_56264__$1);
var G__56267 = c__4297__auto___56265;
var G__56268 = cljs.core.count.call(null,c__4297__auto___56265);
var G__56269 = (0);
seq__56246_56252 = G__56266;
chunk__56247_56253 = G__56267;
count__56248_56254 = G__56268;
i__56249_56255 = G__56269;
continue;
}
} else
{var vec__56251_56270 = cljs.core.first.call(null,seq__56246_56264__$1);var name_56271 = cljs.core.nth.call(null,vec__56251_56270,(0),null);var value_56272 = cljs.core.nth.call(null,vec__56251_56270,(1),null);domina.set_attr_BANG_.call(null,content,name_56271,value_56272);
{
var G__56273 = cljs.core.next.call(null,seq__56246_56264__$1);
var G__56274 = null;
var G__56275 = (0);
var G__56276 = (0);
seq__56246_56252 = G__56273;
chunk__56247_56253 = G__56274;
count__56248_56254 = G__56275;
i__56249_56255 = G__56276;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__56281_56285 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__56282_56286 = null;var count__56283_56287 = (0);var i__56284_56288 = (0);while(true){
if((i__56284_56288 < count__56283_56287))
{var node_56289 = cljs.core._nth.call(null,chunk__56282_56286,i__56284_56288);goog.dom.classes.add(node_56289,class$);
{
var G__56290 = seq__56281_56285;
var G__56291 = chunk__56282_56286;
var G__56292 = count__56283_56287;
var G__56293 = (i__56284_56288 + (1));
seq__56281_56285 = G__56290;
chunk__56282_56286 = G__56291;
count__56283_56287 = G__56292;
i__56284_56288 = G__56293;
continue;
}
} else
{var temp__4126__auto___56294 = cljs.core.seq.call(null,seq__56281_56285);if(temp__4126__auto___56294)
{var seq__56281_56295__$1 = temp__4126__auto___56294;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56281_56295__$1))
{var c__4297__auto___56296 = cljs.core.chunk_first.call(null,seq__56281_56295__$1);{
var G__56297 = cljs.core.chunk_rest.call(null,seq__56281_56295__$1);
var G__56298 = c__4297__auto___56296;
var G__56299 = cljs.core.count.call(null,c__4297__auto___56296);
var G__56300 = (0);
seq__56281_56285 = G__56297;
chunk__56282_56286 = G__56298;
count__56283_56287 = G__56299;
i__56284_56288 = G__56300;
continue;
}
} else
{var node_56301 = cljs.core.first.call(null,seq__56281_56295__$1);goog.dom.classes.add(node_56301,class$);
{
var G__56302 = cljs.core.next.call(null,seq__56281_56295__$1);
var G__56303 = null;
var G__56304 = (0);
var G__56305 = (0);
seq__56281_56285 = G__56302;
chunk__56282_56286 = G__56303;
count__56283_56287 = G__56304;
i__56284_56288 = G__56305;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__56310_56314 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__56311_56315 = null;var count__56312_56316 = (0);var i__56313_56317 = (0);while(true){
if((i__56313_56317 < count__56312_56316))
{var node_56318 = cljs.core._nth.call(null,chunk__56311_56315,i__56313_56317);goog.dom.classes.remove(node_56318,class$);
{
var G__56319 = seq__56310_56314;
var G__56320 = chunk__56311_56315;
var G__56321 = count__56312_56316;
var G__56322 = (i__56313_56317 + (1));
seq__56310_56314 = G__56319;
chunk__56311_56315 = G__56320;
count__56312_56316 = G__56321;
i__56313_56317 = G__56322;
continue;
}
} else
{var temp__4126__auto___56323 = cljs.core.seq.call(null,seq__56310_56314);if(temp__4126__auto___56323)
{var seq__56310_56324__$1 = temp__4126__auto___56323;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56310_56324__$1))
{var c__4297__auto___56325 = cljs.core.chunk_first.call(null,seq__56310_56324__$1);{
var G__56326 = cljs.core.chunk_rest.call(null,seq__56310_56324__$1);
var G__56327 = c__4297__auto___56325;
var G__56328 = cljs.core.count.call(null,c__4297__auto___56325);
var G__56329 = (0);
seq__56310_56314 = G__56326;
chunk__56311_56315 = G__56327;
count__56312_56316 = G__56328;
i__56313_56317 = G__56329;
continue;
}
} else
{var node_56330 = cljs.core.first.call(null,seq__56310_56324__$1);goog.dom.classes.remove(node_56330,class$);
{
var G__56331 = cljs.core.next.call(null,seq__56310_56324__$1);
var G__56332 = null;
var G__56333 = (0);
var G__56334 = (0);
seq__56310_56314 = G__56331;
chunk__56311_56315 = G__56332;
count__56312_56316 = G__56333;
i__56313_56317 = G__56334;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__56339_56343 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__56340_56344 = null;var count__56341_56345 = (0);var i__56342_56346 = (0);while(true){
if((i__56342_56346 < count__56341_56345))
{var node_56347 = cljs.core._nth.call(null,chunk__56340_56344,i__56342_56346);goog.dom.classes.toggle(node_56347,class$);
{
var G__56348 = seq__56339_56343;
var G__56349 = chunk__56340_56344;
var G__56350 = count__56341_56345;
var G__56351 = (i__56342_56346 + (1));
seq__56339_56343 = G__56348;
chunk__56340_56344 = G__56349;
count__56341_56345 = G__56350;
i__56342_56346 = G__56351;
continue;
}
} else
{var temp__4126__auto___56352 = cljs.core.seq.call(null,seq__56339_56343);if(temp__4126__auto___56352)
{var seq__56339_56353__$1 = temp__4126__auto___56352;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56339_56353__$1))
{var c__4297__auto___56354 = cljs.core.chunk_first.call(null,seq__56339_56353__$1);{
var G__56355 = cljs.core.chunk_rest.call(null,seq__56339_56353__$1);
var G__56356 = c__4297__auto___56354;
var G__56357 = cljs.core.count.call(null,c__4297__auto___56354);
var G__56358 = (0);
seq__56339_56343 = G__56355;
chunk__56340_56344 = G__56356;
count__56341_56345 = G__56357;
i__56342_56346 = G__56358;
continue;
}
} else
{var node_56359 = cljs.core.first.call(null,seq__56339_56353__$1);goog.dom.classes.toggle(node_56359,class$);
{
var G__56360 = cljs.core.next.call(null,seq__56339_56353__$1);
var G__56361 = null;
var G__56362 = (0);
var G__56363 = (0);
seq__56339_56343 = G__56360;
chunk__56340_56344 = G__56361;
count__56341_56345 = G__56362;
i__56342_56346 = G__56363;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_56372__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__56368_56373 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__56369_56374 = null;var count__56370_56375 = (0);var i__56371_56376 = (0);while(true){
if((i__56371_56376 < count__56370_56375))
{var node_56377 = cljs.core._nth.call(null,chunk__56369_56374,i__56371_56376);goog.dom.classes.set(node_56377,classes_56372__$1);
{
var G__56378 = seq__56368_56373;
var G__56379 = chunk__56369_56374;
var G__56380 = count__56370_56375;
var G__56381 = (i__56371_56376 + (1));
seq__56368_56373 = G__56378;
chunk__56369_56374 = G__56379;
count__56370_56375 = G__56380;
i__56371_56376 = G__56381;
continue;
}
} else
{var temp__4126__auto___56382 = cljs.core.seq.call(null,seq__56368_56373);if(temp__4126__auto___56382)
{var seq__56368_56383__$1 = temp__4126__auto___56382;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56368_56383__$1))
{var c__4297__auto___56384 = cljs.core.chunk_first.call(null,seq__56368_56383__$1);{
var G__56385 = cljs.core.chunk_rest.call(null,seq__56368_56383__$1);
var G__56386 = c__4297__auto___56384;
var G__56387 = cljs.core.count.call(null,c__4297__auto___56384);
var G__56388 = (0);
seq__56368_56373 = G__56385;
chunk__56369_56374 = G__56386;
count__56370_56375 = G__56387;
i__56371_56376 = G__56388;
continue;
}
} else
{var node_56389 = cljs.core.first.call(null,seq__56368_56383__$1);goog.dom.classes.set(node_56389,classes_56372__$1);
{
var G__56390 = cljs.core.next.call(null,seq__56368_56383__$1);
var G__56391 = null;
var G__56392 = (0);
var G__56393 = (0);
seq__56368_56373 = G__56390;
chunk__56369_56374 = G__56391;
count__56370_56375 = G__56392;
i__56371_56376 = G__56393;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__56398_56402 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__56399_56403 = null;var count__56400_56404 = (0);var i__56401_56405 = (0);while(true){
if((i__56401_56405 < count__56400_56404))
{var node_56406 = cljs.core._nth.call(null,chunk__56399_56403,i__56401_56405);goog.dom.setTextContent(node_56406,value);
{
var G__56407 = seq__56398_56402;
var G__56408 = chunk__56399_56403;
var G__56409 = count__56400_56404;
var G__56410 = (i__56401_56405 + (1));
seq__56398_56402 = G__56407;
chunk__56399_56403 = G__56408;
count__56400_56404 = G__56409;
i__56401_56405 = G__56410;
continue;
}
} else
{var temp__4126__auto___56411 = cljs.core.seq.call(null,seq__56398_56402);if(temp__4126__auto___56411)
{var seq__56398_56412__$1 = temp__4126__auto___56411;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56398_56412__$1))
{var c__4297__auto___56413 = cljs.core.chunk_first.call(null,seq__56398_56412__$1);{
var G__56414 = cljs.core.chunk_rest.call(null,seq__56398_56412__$1);
var G__56415 = c__4297__auto___56413;
var G__56416 = cljs.core.count.call(null,c__4297__auto___56413);
var G__56417 = (0);
seq__56398_56402 = G__56414;
chunk__56399_56403 = G__56415;
count__56400_56404 = G__56416;
i__56401_56405 = G__56417;
continue;
}
} else
{var node_56418 = cljs.core.first.call(null,seq__56398_56412__$1);goog.dom.setTextContent(node_56418,value);
{
var G__56419 = cljs.core.next.call(null,seq__56398_56412__$1);
var G__56420 = null;
var G__56421 = (0);
var G__56422 = (0);
seq__56398_56402 = G__56419;
chunk__56399_56403 = G__56420;
count__56400_56404 = G__56421;
i__56401_56405 = G__56422;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__56427_56431 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__56428_56432 = null;var count__56429_56433 = (0);var i__56430_56434 = (0);while(true){
if((i__56430_56434 < count__56429_56433))
{var node_56435 = cljs.core._nth.call(null,chunk__56428_56432,i__56430_56434);goog.dom.forms.setValue(node_56435,value);
{
var G__56436 = seq__56427_56431;
var G__56437 = chunk__56428_56432;
var G__56438 = count__56429_56433;
var G__56439 = (i__56430_56434 + (1));
seq__56427_56431 = G__56436;
chunk__56428_56432 = G__56437;
count__56429_56433 = G__56438;
i__56430_56434 = G__56439;
continue;
}
} else
{var temp__4126__auto___56440 = cljs.core.seq.call(null,seq__56427_56431);if(temp__4126__auto___56440)
{var seq__56427_56441__$1 = temp__4126__auto___56440;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56427_56441__$1))
{var c__4297__auto___56442 = cljs.core.chunk_first.call(null,seq__56427_56441__$1);{
var G__56443 = cljs.core.chunk_rest.call(null,seq__56427_56441__$1);
var G__56444 = c__4297__auto___56442;
var G__56445 = cljs.core.count.call(null,c__4297__auto___56442);
var G__56446 = (0);
seq__56427_56431 = G__56443;
chunk__56428_56432 = G__56444;
count__56429_56433 = G__56445;
i__56430_56434 = G__56446;
continue;
}
} else
{var node_56447 = cljs.core.first.call(null,seq__56427_56441__$1);goog.dom.forms.setValue(node_56447,value);
{
var G__56448 = cljs.core.next.call(null,seq__56427_56441__$1);
var G__56449 = null;
var G__56450 = (0);
var G__56451 = (0);
seq__56427_56431 = G__56448;
chunk__56428_56432 = G__56449;
count__56429_56433 = G__56450;
i__56430_56434 = G__56451;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3529__auto__ = allows_inner_html_QMARK_;if(and__3529__auto__)
{var and__3529__auto____$1 = (function (){var or__3541__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3529__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{var value_56462 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__56458_56463 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__56459_56464 = null;var count__56460_56465 = (0);var i__56461_56466 = (0);while(true){
if((i__56461_56466 < count__56460_56465))
{var node_56467 = cljs.core._nth.call(null,chunk__56459_56464,i__56461_56466);node_56467.innerHTML = value_56462;
{
var G__56468 = seq__56458_56463;
var G__56469 = chunk__56459_56464;
var G__56470 = count__56460_56465;
var G__56471 = (i__56461_56466 + (1));
seq__56458_56463 = G__56468;
chunk__56459_56464 = G__56469;
count__56460_56465 = G__56470;
i__56461_56466 = G__56471;
continue;
}
} else
{var temp__4126__auto___56472 = cljs.core.seq.call(null,seq__56458_56463);if(temp__4126__auto___56472)
{var seq__56458_56473__$1 = temp__4126__auto___56472;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56458_56473__$1))
{var c__4297__auto___56474 = cljs.core.chunk_first.call(null,seq__56458_56473__$1);{
var G__56475 = cljs.core.chunk_rest.call(null,seq__56458_56473__$1);
var G__56476 = c__4297__auto___56474;
var G__56477 = cljs.core.count.call(null,c__4297__auto___56474);
var G__56478 = (0);
seq__56458_56463 = G__56475;
chunk__56459_56464 = G__56476;
count__56460_56465 = G__56477;
i__56461_56466 = G__56478;
continue;
}
} else
{var node_56479 = cljs.core.first.call(null,seq__56458_56473__$1);node_56479.innerHTML = value_56462;
{
var G__56480 = cljs.core.next.call(null,seq__56458_56473__$1);
var G__56481 = null;
var G__56482 = (0);
var G__56483 = (0);
seq__56458_56463 = G__56480;
chunk__56459_56464 = G__56481;
count__56460_56465 = G__56482;
i__56461_56466 = G__56483;
continue;
}
}
} else
{}
}
break;
}
}catch (e56457){if((e56457 instanceof Error))
{var e_56484 = e56457;domina.replace_children_BANG_.call(null,content,value_56462);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e56457;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3529__auto__ = bubble;if(cljs.core.truth_(and__3529__auto__))
{return (value == null);
} else
{return and__3529__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3541__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__56491_56495 = cljs.core.seq.call(null,children);var chunk__56492_56496 = null;var count__56493_56497 = (0);var i__56494_56498 = (0);while(true){
if((i__56494_56498 < count__56493_56497))
{var child_56499 = cljs.core._nth.call(null,chunk__56492_56496,i__56494_56498);frag.appendChild(child_56499);
{
var G__56500 = seq__56491_56495;
var G__56501 = chunk__56492_56496;
var G__56502 = count__56493_56497;
var G__56503 = (i__56494_56498 + (1));
seq__56491_56495 = G__56500;
chunk__56492_56496 = G__56501;
count__56493_56497 = G__56502;
i__56494_56498 = G__56503;
continue;
}
} else
{var temp__4126__auto___56504 = cljs.core.seq.call(null,seq__56491_56495);if(temp__4126__auto___56504)
{var seq__56491_56505__$1 = temp__4126__auto___56504;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56491_56505__$1))
{var c__4297__auto___56506 = cljs.core.chunk_first.call(null,seq__56491_56505__$1);{
var G__56507 = cljs.core.chunk_rest.call(null,seq__56491_56505__$1);
var G__56508 = c__4297__auto___56506;
var G__56509 = cljs.core.count.call(null,c__4297__auto___56506);
var G__56510 = (0);
seq__56491_56495 = G__56507;
chunk__56492_56496 = G__56508;
count__56493_56497 = G__56509;
i__56494_56498 = G__56510;
continue;
}
} else
{var child_56511 = cljs.core.first.call(null,seq__56491_56505__$1);frag.appendChild(child_56511);
{
var G__56512 = cljs.core.next.call(null,seq__56491_56505__$1);
var G__56513 = null;
var G__56514 = (0);
var G__56515 = (0);
seq__56491_56495 = G__56512;
chunk__56492_56496 = G__56513;
count__56493_56497 = G__56514;
i__56494_56498 = G__56515;
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
return (function (p1__56485_SHARP_,p2__56486_SHARP_){return f.call(null,p1__56485_SHARP_,p2__56486_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3529__auto__ = obj;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3529__auto____$1)
{return obj.length;
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
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
{if((function (){var G__56517 = list_thing;if(G__56517)
{var bit__4191__auto__ = (G__56517.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4191__auto__) || (G__56517.cljs$core$ISeqable$))
{return true;
} else
{if((!G__56517.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__56517);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__56517);
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
{if((function (){var G__56518 = content;if(G__56518)
{var bit__4191__auto__ = (G__56518.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4191__auto__) || (G__56518.cljs$core$ISeqable$))
{return true;
} else
{if((!G__56518.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__56518);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__56518);
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
{if((function (){var G__56519 = content;if(G__56519)
{var bit__4191__auto__ = (G__56519.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4191__auto__) || (G__56519.cljs$core$ISeqable$))
{return true;
} else
{if((!G__56519.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__56519);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__56519);
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

//# sourceMappingURL=domina.js.map